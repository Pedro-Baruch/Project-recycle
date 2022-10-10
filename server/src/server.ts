import cors from 'cors'
import express, { Request, Response } from 'express'
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json({mensagem:'Hello World!'})
})

app.use(router)

app.listen(3000, () => console.log("Servidor rodando!"))