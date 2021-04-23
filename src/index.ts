import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (_: Request, response: Response) => {
  response.status(200).json({ result: 'ok!' })
})

app.listen(3000)
