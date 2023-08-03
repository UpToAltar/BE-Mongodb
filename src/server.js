require("dotenv").config();
import express from "express";
import configViewEngine from "./config/configViewEngine";
import initWebRouter from "./routers/web";
import routerAPI from "./routers/API";
import connection from "./config/connectDB";
//import connection from "./config/mongodb";
import fileUpload from "express-fileupload";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 8001;

// default options
app.use(fileUpload());

// config view engine
configViewEngine(app);

// init web router
initWebRouter(app)
app.use("/v1/api/", routerAPI)

app.use((req, res, next) => {
  return res.render("404.ejs");
});



(async()=>{
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Connection error:",error);
  }
})();
