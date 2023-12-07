import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authenticate from './authenticate';
import './db';
import usersRouter from './api/users';
import moviesRouter from './api/movies';   //import movies router
import defaultErrHandler from './errHandler';

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use('/api/movies',authenticate,  moviesRouter);
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter); 
app.use(defaultErrHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});