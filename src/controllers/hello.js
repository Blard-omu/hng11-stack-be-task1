import { getLocationAndWeather } from "../utils/weather.js";
import os from 'os';

export const helloHngTask1 = async (req, res) => {
  const visitorName = req.query.visitor_name || "Blard";
  const clientIp = req.clientIp || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log(`Client IP: ${clientIp}`);

  try {
    const { location, temperature } = await getLocationAndWeather(clientIp);
    const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`;

    res.json({
      client_ip: clientIp,
      location,
      greeting,
      server_hostname: os.hostname()
    });
  } catch (error) {
    console.error('Error in helloHngTask1:', error);
    res.status(500).json({ error: "Failed to retrieve weather information" });
  }
};
