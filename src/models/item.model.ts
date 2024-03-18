import mongoose from "mongoose";
import { MODEL_NAMES } from "../constants";


const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});


interface Item extends mongoose.InferSchemaType<typeof schema> {
    [x: string]: any;
}


const ItemModel = mongoose.model(MODEL_NAMES.ITEMS, schema);
export default ItemModel;
export { Item };