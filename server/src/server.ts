import express from 'express'
import router from './routes'
import { Request, Response } from "express"

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:'Hello World!'})
})

app.use(router)

app.listen(3000, () => console.log("Servidor rodando!"))