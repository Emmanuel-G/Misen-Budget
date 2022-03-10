const express = require("express");

const server_port = 5300;
const server_url = "http://127.0.0.1";

const app = express();

app.listen(server_port, () => {
  console.log(`Server listening at ${server_url}:${server_port}`);
});
