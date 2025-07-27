import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

import authRoutes from './routes/auth';
import aiToolsRoutes from './routes/aiTools';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/login', authRoutes);
app.use('/ai-tools', aiToolsRoutes);

app.use(express.static(path.join(__dirname, '../public')));

export default app;
