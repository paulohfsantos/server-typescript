import express, { Request, Response } from 'express'
import router from './routes'

const server = express()

server.use(router)

// not found route
server.use((req: Request, res: Response) => {
  res.status(404).send('route not found')
})

server.listen(5000)