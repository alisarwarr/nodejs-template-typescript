import express, { Router } from "express";
const router: Router = express.Router();


import { createProduct, deleteProduct, updateProduct, getProduct, getAllProducts } from "../controllers/product.controller";


router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/:id", getProduct);
router.get("/", getAllProducts);


export default router;