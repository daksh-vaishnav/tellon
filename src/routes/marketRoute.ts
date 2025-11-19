import { Router, type Request, type Response } from "express";
import { getAllMarketService } from "../services/marketService.js";


const router = Router();

router.get("/all", async (req: Request, res: Response) => {
    try {
        const markets = await getAllMarketService();
        return res.json({ status: "success", message: "successfully fetched market", data: markets })

    } catch (error) {
        console.log(error);
    }
})



export default router