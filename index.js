import express from "express";
import helloRoute from "./src/routes/hello.js";
import dotenv from "dotenv";
import requestIp from "request-ip"


dotenv.config();

const app = express();
app.use(requestIp.mw());

const port = process.env.PORT || 3000;
const api = process.env.WEATHER_API_KEY;
console.log(api);

app.get('/', (req, res) => {
  return res.json({ success: true, message: "Hello Blard" });
});

app.use("/api", helloRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
