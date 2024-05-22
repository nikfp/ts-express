import express from "express";
import logger from "./logger.js";

import { messageAdder, messageReader } from "./custom_objects.js";

const app = express();

const PORT = process.env.port ?? 3000;

app.use(logger);

app.use("/message", messageAdder);

app.use(messageReader);

app.use("/", (_req, res) => {
  res.send(
    "This is a base route that currently has no value other than this message",
  );
});

app.listen(PORT, () => {
  console.log(`Express TS application listening on port ${PORT}`);
});
