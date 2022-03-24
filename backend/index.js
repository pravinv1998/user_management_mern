// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send({ name: "Pravin " });
});

app.post("/user", (req, res) => {
  console.log("UserData: ", req.body.user);
  res.send("Data fetch successfully!!!");
});

app.all("*", (req, res) => res.send("Envalid route..."));

app.listen(port, (req, res) => console.log(`Server listen on port ${port}`));
