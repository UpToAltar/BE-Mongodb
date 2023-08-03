import connection from "../config/connectDB";
import User from "../models/users";
export const getAllUsers = async () => {
    try {
            let users = await User.find({});
            return users;
        
    } catch (error) {
        console.log(error);
    }
    
}