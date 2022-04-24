import express from 'express';
// 로그를 남겨주는 모듈
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import userRouter from './router/userRouter';
// import postRouter from './router/postRouter';
// import oauthRotuer from './router/oauthRouter';

const app = express();
const logger = morgan('dev');
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
    credentials: true,
  })
);

app.use(logger);

// app.use('/user', userRouter);
// app.use('/post', postRouter);
// app.use('/oauth', oauthRotuer);

export default app;
