import express from "express";
import morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(router);

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

export { app };
