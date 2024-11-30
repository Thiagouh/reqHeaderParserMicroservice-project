const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

module.exports = app;
