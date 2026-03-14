import express from "express";
import cors from "cors";
import { handleAppointment } from "./routes/appointment";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.post("/api/appointment", handleAppointment);

  return app;
}
