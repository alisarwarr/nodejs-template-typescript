import mongoose, { Mongoose } from "mongoose";
const MONGODB_URI: string = process.env.MONGODB_URI || "";


const connectDB = async (): Promise<void> => {
    try {
        const db: Mongoose = await mongoose.connect(MONGODB_URI);
        if (db.connection.readyState === db.STATES.connected) {
            console.log('db is connected, db name - ' + db.connection.db.databaseName);
        }
    }
    catch (error: any) {
        console.log(error.message);
    }
}


export default connectDB;