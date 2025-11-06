import express, { type Express, type Request, type Response, json, urlencoded } from 'express'

import appRouters from './routes/index.js';

const app: Express = express();



app.use(json())
app.use(urlencoded({ extended: true }))


app.use("/api/v1", appRouters)


export default app;