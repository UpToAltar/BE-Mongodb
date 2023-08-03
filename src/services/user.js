import connection from "../config/connectDB";
import User from "../models/users";
export const createUser = async (body) => {
    try {
        let response = await User.create({
            email: body.email,
            name: body.username,
            city: body.city
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const editUserPage = async (id) => {
    try {
        const response = await User.findById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (id,body) => {
    try {
        let response = await User.updateOne({_id:id},{
            email: body.email,
            name: body.username,
            city: body.city
        })
        
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser = async (id) => {
    try {
        let response = await User.deleteOne({_id:id});
        
        return response;
    } catch (error) {
        console.log(error);
    }
}

