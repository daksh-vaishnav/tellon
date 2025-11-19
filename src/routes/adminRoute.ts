import { Router, type Request, type Response } from "express";
import { generateJWT } from "../utils/jwt.js";
import { validateSchema } from "../validator/index.js";
import { marketCreateSchema } from "../validator/market.js";

const router = Router();


const market = [
    {
        id: "1",
        marketTitle: "will i get 250K job",
        thumbnailImage: "https://www.shutterstock.com/image-illustration/250k-followers-achievement-000-background-congratulating-2387066901",
        totalStocks: [{
            option: 1,
            title: "",
            totalCap: "100mn", // should be calculate on run time
            yes: 50,
            no: 50
        }],
        orderBook: [{
            optionId: 1,
            yes: [{
                userId: 123,
                stock: 30,
                price: 30,
                type: "ask"
            }],
            no: [{
                userId: 123,
                stock: 70,
                price: 70,
                type: "bid"
            }]
        }],
        result: ""
    }
]

router.get("/sign-in", (req: Request, res: Response) => {
    const { username, password } = req.body

    if (password != "admin@123") {
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




router.post("/create/market", validateSchema(marketCreateSchema), (req: Request, res: Response) => {
    const body = req.body;
    return res.json({ body })

})







export default router;