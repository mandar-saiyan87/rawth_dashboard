import express from 'express'
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get('/status', (req, res) => {
    res.status(200).send({
        status: "ok"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})