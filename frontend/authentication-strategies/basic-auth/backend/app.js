import express from "express";
import { decodeBasicAuth } from "./lib/decode-base64.js";
const port = "3000";
const app = express();
app.get("/", (req, res) => {
  return res.json({
    success: true,
  });
});
app.get("/basic-auth", (req, res) => {
  console.log(req.headers);
  const { ip } = req;
  const { authorization } = req.headers;
  const userCredentials = decodeBasicAuth(authorization);
  console.log("userCredentials", userCredentials);
  console.log("IP:", ip);
  if (!userCredentials) {
    res.set("WWW-Authenticate", 'Basic realm="test"');
    return res.status(401).json({
      success: true,
    });
  }
  console.log("iam working");
  return res.status(200).json({
    success: true,
  });
});
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
