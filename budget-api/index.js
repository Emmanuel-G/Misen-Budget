const express = require("express");
const cors = require("cors");

const server_port = 5300;
const server_url = "http://127.0.0.1";

const app = express();
// const route = express.Router();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Server accessed");
  next();
});

app.post("/user", (req, res, next) => {
  console.log(req.body);
  res.json({ message: "true" });
});

app.listen(server_port, () => {
  console.log(`Server listening at ${server_url}:${server_port}`);
});
