import * as services from '../services'

const createEmtyTask = async (req, res) => {
    try {
        const body = req.body;
        if(!body){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.createEmtyTask(body);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const getAllTasks = async (req, res) => {
    try {
        
        const response = await services.getAllTasks(req.query);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const updateTask = async (req, res) => {
    try {
        if(!req.body.id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.updateTask(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
        err: 1,
        mes: error,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.deleteTask(id);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

module.exports = {createEmtyTask,getAllTasks,updateTask,deleteTask}