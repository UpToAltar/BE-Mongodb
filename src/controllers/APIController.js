import * as services from "../services";

const getUsers = async (req, res) => {
    try {
        let response = await services.getAllUsers();
        
        return res.status(200).json({
            err:0,
            data:response
        })

        
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const createUsers = async (req, res) => {
    try {
        const body = req.body;
        if(!body.email || !body.username || !body.city){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        let response = await services.createUser(body);
        
        return res.status(200).json({
            err:0,
            data:response
        })

        
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const updateUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if(!body.email || !body.username || !body.city || !id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        let response = await services.updateUser(id,body);
        
        return res.status(200).json({
            err:0,
            data:response
        })

        
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}
const deleteUsers = async (req, res) => {
    try {
        const id = req.params.id;
        
        if(!id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        let response = await services.deleteUser(id);
        
        return res.status(200).json({
            err:0,
            data:response
        })

        
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const uploadSingleFile = async (req, res) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json({
                err:1,
                mes:"No files were uploaded."
            })
        }

        const fileObject = req.files.image;
        let response = await services.uploadSingleFile(fileObject);
        return response
    } catch (error) {
        return error
    }
}

const uploadMultipleFile = async (req, res) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json({
                err:1,
                mes:"No files were uploaded."
            })
        }

        const fileObject = req.files.image;
        let response;
        if(!Array.isArray(fileObject)){
            response = await services.uploadSingleFile(fileObject);
        } else{
            response = await services.uploadMultipleFile(fileObject);
        }
        return response 
    } catch (error) {
        return error
    }
}
module.exports = {getUsers,createUsers,updateUsers,deleteUsers,uploadSingleFile,uploadMultipleFile}