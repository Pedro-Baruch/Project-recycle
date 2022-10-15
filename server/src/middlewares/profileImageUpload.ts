import { NextFunction, Request, Response } from "express"
import { BUCKET, bucket } from "../database/Firebase/firebase"

export const profileImageUpload = async(req: Request, res: Response, next: NextFunction) => {
    if(!req.file) {
        return next()
    }

    const img  = req.file
    const fileName = `${Date.now()}Perfil.${img.originalname.split(".").pop()}`

    const file = bucket.file(`Perfil/${fileName}`)

    const stream = file.createWriteStream({
        metadata: {
            contentType: img.mimetype
        }
    })

    stream.on('error', (e) => {
        console.log(e)
    })

    stream.on('finish', async() => {
        await file.makePublic()

        const firebaseUrl = `https://storage.googleapis.com/${BUCKET}/Perfil/${fileName}`

        req.imgUrl = {
            url: firebaseUrl
        }
        
        next()
    })

    stream.end(img.buffer)
}