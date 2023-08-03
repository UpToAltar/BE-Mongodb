import * as services from '../services'

const createEmtyProject = async (req, res) => {
    try {
        const body = req.body;
        
        if(!body || Object.keys(body).length === 0){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.createEmtyProject(body);
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const getAllProjects = async (req, res) => {
    try {
        
        const response = await services.getAllProjects(req.query);
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.deleteProject(id);
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

const updateProject = async (req, res) => {
    try {
        const id = req.body.id
        if(!id){
            return res.status(400).json({
                err:1,
                mes:"Missing required "
            })
        }
        const response = await services.updateProject(req.body);
        
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:1,
            mes:error
        })
    }
}

module.exports = {createEmtyProject,getAllProjects,deleteProject,updateProject}
