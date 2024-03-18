import { Request, Response } from "express";
import { apiResponse } from "../utils/apiResponse";
import ItemModel, { Item } from "../models/item.model";


export const createItem = async (req: Request, res: Response) => {
    const item = await ItemModel.create(req.body);

    return apiResponse({
        res,
        data: item,
        message: "Item add successfull"
    });
}


export const deleteItem = async (req: Request, res: Response) => {
    const item = await ItemModel.findByIdAndDelete(req.params.id);

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item
    });
}


export const updateItem = async (req: Request, res: Response) => {
    const item = await ItemModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item
    });
}


export const getItem = async (req: Request, res: Response) => {
    const item = await ItemModel.findById(req.params.id);

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No item found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item,
        message: "OK"
    });
}


export const getAllItems = async (req: Request, res: Response) => {
    const item: Item[] = await ItemModel.find();

    if (!item) {
        return apiResponse({
            res,
            data: item,
            message: "No items found",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: item,
        message: "OK"
    });
}