import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173"}));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} $${req.originalUrl}`)
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next({ status: 404, message: "Endpoint not found. Please re-check and try again." })
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.status || 500);
  res.json(err.message || "Internal Server Error.");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});