import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { Server } from 'http';
import { getAppointments } from './appointments';
import { getClinics } from './clinics';

export const app: Application = express();
app.use(cors());

const port: number = 3001;

app.get('/health', (req: Request, res: Response) => {
  res.json({ success: true });
});

app.get('/clinics', async (req: Request, res: Response) => {
  res.json(await getClinics());
});

app.get('/appointments', async (req: Request, res: Response) => {
  res.json(await getAppointments());
});

export const server: Server = app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});
