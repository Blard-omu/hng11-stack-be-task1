import express from 'express';
import { helloHngTask1 } from '../controllers/hello.js';

const router = express.Router();

router.get('/hello', helloHngTask1);

export default router;
