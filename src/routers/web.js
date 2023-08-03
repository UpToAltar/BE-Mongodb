import express from "express";
import home from "./home";
import user from "./user";

const router = express.Router();
const initWebRouter = (app) => {
    app.use('/user',user)
    app.use("/",home);
    return app.use("/", router);
}

export default initWebRouter;