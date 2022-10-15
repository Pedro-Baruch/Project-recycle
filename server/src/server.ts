import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { AppError } from './Errors/AppError'
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:'Hello World!'})
})

app.use(router)

//app.use(erroMiddleware)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3000, () => console.log("Servidor rodando!"))