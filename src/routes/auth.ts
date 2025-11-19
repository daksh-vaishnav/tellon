import { Router, type Request, type Response } from "express";
import { generateJWT } from "../utils/jwt.js";

const router = Router();


router.get("/sign-in", (req: Request, res: Response) => {
    const { username, password } = req.body

    if (password != 12345) {
        return res.status(400).json({ message: "invalid Password" })
    }
    let jwt = null;
    try {
        jwt = generateJWT(username)
    } catch (error) {
        return res.status(500).json({ message: "something went wrong!!!" })
    }

    return res.json({ token: jwt })

})


router.get("/sign-up", (req: Request, res: Response) => {
    const { username, password } = req.body

    if (password != 12345) {
        return res.status(400).json({ message: "invalid Password" })
    }
    let jwt = null;
    try {
        jwt = generateJWT(username)
    } catch (error) {
        return res.status(500).json({ message: "something went wrong!!!" })
    }

    return res.json({ token: jwt })

})


export default router;