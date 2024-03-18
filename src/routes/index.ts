import express, { Router, Request, Response } from "express";
const router: Router = express.Router();


router.get("/", (req: Request, res: Response) => {
    res.json({
        status: true,
        version: "v1.0",
        message: "Backend API"
    });
});


import itemRoutes from "../routes/item.routes";
import productRoutes from "../routes/product.routes";


router.use("/items", itemRoutes);
router.use("/products", productRoutes);


export default router;