import connection from "../config/connectDB";
import * as services from "../services";

const getHomePage = async (req, res) => {
    try {
        let response = await services.getAllUsers();
        
        return res.render("home.ejs", { users: response });

        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {getHomePage}