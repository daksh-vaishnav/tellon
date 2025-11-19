import { Router } from 'express';
import {
    addController,
    deleteController,
    getAllController,
    getByIdController,
    updateController
} from "../controllers/orderbookController.js"

const router = Router();

router.post("/", addController);

router.get("/all/:marketId", getAllController)

router.get("/:id", getByIdController)


router.patch("/:id", updateController)

router.delete("/:id", deleteController)


export default router;