import express, { Application, Request, Response } from 'express';

export const app: Application = express();

const port: number = 3001;

app.get('/health', (req: Request, res: Response) => {
  res.json({ success: true });
});

export const server = app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});
