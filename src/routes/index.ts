
import { Router } from 'express'
import authRoute from './authRoute.js'
import adminRoute from "./adminRoute.js"
import orderbookRoute from "./orderbookRoute.js"
import marketRoute from "./marketRoute.js"


const appRouters = Router();




appRouters.use("/auth", authRoute)

appRouters.use("/admin", adminRoute)

appRouters.use("/user", orderbookRoute)

appRouters.use("/orderbook", orderbookRoute)

appRouters.use("/market", marketRoute)










export default appRouters