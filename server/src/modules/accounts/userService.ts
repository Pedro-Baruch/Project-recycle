import { hashSync } from "bcrypt"
import { sign } from 'jsonwebtoken'
import jwtSecret from "../../config/jwtSecret"
import { prisma } from "../../database/prismaClient"
import { AppError } from "../../Errors/AppError"
import { SendEmail } from "../../util/nodemailer"

interface ICreateUser{
    name: string
    email: string
    profilePictureUrl: string | undefined
    password: string
}

export class UserService {
  createUser = async({name, email, password, profilePictureUrl}: ICreateUser) => {
    const user = await prisma.user.findUnique({
        where: {email}
    })

    if(user) {
        throw new AppError("Usuário já possui uma conta")
    }

    const passwordHash = hashSync(password, 8)

    const token = sign({email: email}, jwtSecret.jwt_access_secret, {
      expiresIn: jwtSecret.expires_in_token
    })

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        confirmationToken: token
      }
    })

    if(!newUser) {
      throw new AppError("Erro ao criar usuário")
    }

    const sendEmail = new SendEmail()
    sendEmail.sendMail('Verificação de email', email, 'email-confirmation', newUser.confirmationToken as string)

    const userProfile = await prisma.userProfile.create({
      data: {
        userId: newUser.id,
        profilePictureUrl
      }
    })
  }

  findbyEmail = async(email: string) => {
      const user = await prisma.user.findUnique({
        where: {email}
      })

      if(!user) {
        throw new AppError("Usuário não encontrado!", 404)
      }

      return user
  }

  findById = async(id: string) => {
      const user = await prisma.user.findUnique({
        where: {id},
        select: {
          id: true,
          userProfile: {
            select: {
              id: true
            }
          }
        }
      })

      
      if(!user) {
        throw new AppError("Usuário não encontrado!", 404)
      }

      return user
  }
}