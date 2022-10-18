import cors from 'cors'
import express, { Request, Response } from 'express'
import 'express-async-errors'
import { erroMiddleware } from './middlewares/errorMiddleware'
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:'Hello World!'})
})

app.use(router)

app.use(erroMiddleware)

app.listen(3000, () => console.log("Servidor rodando!"))