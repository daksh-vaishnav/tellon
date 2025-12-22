import { config } from "./config/config.js";
import app from "./index.js"


const port = config.port;

const server = app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`);
})


const gracefulShutDown = () => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    })
}

process.on('SIGINT', gracefulShutDown)
process.on('SIGTERM', gracefulShutDown)


process.on('uncaughtException', (err) => {
    console.log('uncaughtException');
    console.log(err);
    gracefulShutDown();
})

process.on('unhandledRejection', (reason) => {
    console.log('unhandledRejection');
    console.log(reason);
    gracefulShutDown();
})