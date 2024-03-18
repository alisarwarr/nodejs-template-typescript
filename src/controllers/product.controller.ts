import { Request, Response } from "express";
import { apiResponse } from "../utils/apiResponse";
import ProductModel, { Product } from "../models/product.model";


export const createProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.create(req.body);

    return apiResponse({
        res,
        data: product,
        message: "Product add successfull"
    });
}


export const deleteProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product
    });
}


export const updateProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product
    });
}


export const getProduct = async (req: Request, res: Response) => {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No product found for the given (id)",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product,
        message: "OK"
    });
}


export const getAllProducts = async (req: Request, res: Response) => {
    const product: Product[] = await ProductModel.find();

    if (!product) {
        return apiResponse({
            res,
            data: product,
            message: "No products found",
            code: 400
        });
    }

    return apiResponse({
        res,
        data: product,
        message: "OK"
    });
}