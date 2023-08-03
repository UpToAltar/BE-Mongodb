import { uploadSingleFile } from "./APIController";
import * as services from "../services/customers";
const createCustomer = async (req, res) => {
    try {
        const body = req.body;
        let filePath;
        if(!body.name){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        if(req.files){
            filePath = await uploadSingleFile(req,res);
        }

        const response = await services.createCustomer(body,filePath.path);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const createManyCustomers = async (req, res) => {
    try {
        const body = req.body.customers;
        if(!body){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.createManyCustomers(body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const getAllCustomers = async (req, res) => {
    try {
        let response;
        const limit = req.query.limit;
        const page = req.query.page || 1;
        
        const skip = (page - 1) * limit;
        if(req.query){
            response = await services.getAllCustomers(limit,skip,req.query);
        } else{
            response = await services.getAllCustomers();
        }
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const updateCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        
        if(!body|| !id || Object.keys(body).length === 0){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.updateCustomer(id,body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        
        if(!id){
            return res.status(400).json({
                err:1,
                mes:"Missing required id to delete"
            })
        }
        const response = await services.deleteCustomer(id);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const deleteManyCustomers = async (req, res) => {
    try {
        const arrId = req.body
        
        
        if(!arrId || Object.keys(arrId).length === 0){
            return res.status(400).json({
                err:1,
                mes:"Missing required id to delete"
            })
        }
        const response = await services.deleteManyCustomers(arrId.customersIds);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

module.exports = { createCustomer ,createManyCustomers,getAllCustomers,updateCustomer,deleteCustomer,deleteManyCustomers}