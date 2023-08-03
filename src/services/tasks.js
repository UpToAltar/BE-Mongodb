import Task from '../models/tasks';
import aqp from 'api-query-params';
export const createEmtyTask = async (body) => {
    try {
        let response
        if(body.type == "EMTY-TASK"){
            response = await Task.create(body);
            
        }
        return {
            err: 0,
            data: response,
        };
    } catch (error) {
        return{
            err:1,
            mes:error
        }
    }
}

export const getAllTasks = async (queryString) => {
    try {
        const page = queryString.page || 1;
        const {filter, limit} = aqp(queryString);  
        const offset = (page-1) * limit;

        delete filter.page;
        const response = await Task.find(filter).limit(limit).skip(offset);
        return {
            err: 0,
            data: response,
        };
    } catch (error) {
        return{
            err:1,
            mes:error
        }
    }
}

export const updateTask = async (body) => {
    try {
        
        const response = await Task.updateOne({_id:body.id},body);
        return {
            err: 0,
            data: response,
        };
    } catch (error) {
        return{
            err:1,
            mes:error
        }
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await Task.deleteById(id);
        return {
            err: 0,
            data: response,
        };
    } catch (error) {
        return{
            err:1,
            mes:error
        }
    }
}