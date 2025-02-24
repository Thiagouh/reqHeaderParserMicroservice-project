module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const ipaddress =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.status(200).json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
};
