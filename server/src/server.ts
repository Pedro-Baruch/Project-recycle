import express from 'express'
import router from './routes'

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({mensagem:'Hello World!'})
})

app.use(router)

app.listen(3000, () => console.log("Servidor rodando!"))