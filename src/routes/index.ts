
import { Router } from 'express'
import authRoute from './auth.js'
import adminRoute from "./admin.js"
import orderbookRoute from "./orderbookRoute.js"


const appRouters = Router();




appRouters.use("/auth", authRoute)

appRouters.use("/admin", adminRoute)

appRouters.use("/user", orderbookRoute)

appRouters.use("/orderbook", orderbookRoute)










export default appRouters