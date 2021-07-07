import { Router, Request, Response } from 'express';

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello there')
})

// getting flights
router.get('/flights/:origin-:destination', (req: Request, res: Response) => {
  let { origin, destination } = req.params
  res.send(`looking for flights from ${origin.toUpperCase()} until ${destination.toUpperCase()}`)
})

export default router