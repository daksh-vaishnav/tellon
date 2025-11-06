
import { Router } from 'express'
import userRoute from './user.js'
import adminRoute from "./admin.js"


const appRouters = Router();




appRouters.use("/user", userRoute)
appRouters.use("/admin", adminRoute)











export default appRouters