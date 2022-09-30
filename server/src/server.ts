import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({mensagem:'Hello World!'})
})


app.listen(3000, () => console.log("Servidor rodando!"))