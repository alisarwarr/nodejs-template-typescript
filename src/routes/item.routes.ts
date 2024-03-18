import express, { Router } from "express";
const router: Router = express.Router();


import { createItem, deleteItem, updateItem, getItem, getAllItems } from "../controllers/item.controller";


router.post("/", createItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);
router.get("/:id", getItem);
router.get("/", getAllItems);


export default router;