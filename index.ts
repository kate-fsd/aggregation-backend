import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { aggregate } from "./src/aggregate";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/aggregate", aggregate);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
