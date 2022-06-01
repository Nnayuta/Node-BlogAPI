import { errorHandle } from '@middlewares/errorHandle';
import { JWTAuthenticationMiddleware } from '@middlewares/jwt-authentication.middleware';
import express from 'express';
import { AuthRouter, PostRouter, UserRouter } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AuthRouter);
app.use(UserRouter);

app.use(JWTAuthenticationMiddleware);
app.use(PostRouter);

app.use(errorHandle);

export { app };

