import e from "express";
import connection from "../config/connectDB";
import * as servies from "../services";

const create = async (req, res) => {
    try {
        const body = req.body
        let response = await servies.createUser(body);
        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

const editPage = async (req, res) => {
    try {
        const id = req.params.id;
        let response = await servies.editUserPage(id);
        return res.render("edit.ejs", { user: response });
        
    } catch (error) {
        console.log(error);
    }
}
const edit = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        
        let response = await servies.updateUser(id,body);
        return res.redirect("/");
        
    } catch (error) {
        console.log(error);
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        
        let response = await servies.deleteUser(id);
        return res.redirect("/");
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {create,editPage,edit,deleteUser}