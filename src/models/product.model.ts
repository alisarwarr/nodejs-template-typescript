import mongoose from "mongoose";
import { MODEL_NAMES } from "../constants";


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});


interface Product extends mongoose.InferSchemaType<typeof schema> {
    [x: string]: any;
}


const ProductModel = mongoose.model(MODEL_NAMES.PRODUCTS, schema);
export default ProductModel;
export { Product };