import express from "express";
import http from "http";
import cors from 'cors';

import { Request, Response } from "express";
import { Sync } from '../../src';

Sync();

const app: any = express();
const httpServer = new http.Server(app);

const port = 8080
app.use(cors());
app.get('*', (_req: Request, res: Response) => {
  res.send({hello: 1})
});

httpServer.listen(port, () => {
  console.log(`http listening on localhost:${port}`);
});
