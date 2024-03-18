import * as dotenv from "dotenv";
dotenv.config();


import express, { Application } from "express";
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


import routes from "../routes";
app.use(routes);


import cors from "cors";
const whitelist = process.env.FRONDEND_URL ? process.env.FRONDEND_URL.split(',') : [];
const corsOptions = {
    origin: function (origin: any, callback: Function) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
//app.use(cors());                /* development */
  app.use(cors(corsOptions));     /* production */


export default app;