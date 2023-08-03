import Project from "../models/projects";
import mongoose from "mongoose";
import aqp from "api-query-params";
export const createEmtyProject = async (body) => {
    try {
        
        let response
        if(body.type == "EMTY-PROJECT"){
            response = await Project.create(body)
        }
        if(body.type == "ADD-USERS"){
            
            let newProject = await Project.findById(body.projectId);
            if(newProject){
                // Thêm user vào project sau, loại bỏ user trùng lặp
                let oldUsers = newProject.usersInfo.map(user => user.toHexString());
                let newUsers = [...oldUsers, ...body.usersInfo];
                let set = new Set(newUsers);
                newProject.usersInfo = [...set];
                response = await newProject.save();
            }
        }

        if(body.type == "ADD-TASKS"){
            
            let newProject = await Project.findById(body.projectId);
            if(newProject){
                // Thêm task vào project sau, loại bỏ task trùng lặp
                let oldTasks = newProject.task.map(task => task.toHexString());
                let newTasks = [...oldTasks, ...body.taskArr];
                let set = new Set(newTasks);
                newProject.task = [...set];
                response = await newProject.save();
            }
        }
        if(body.type == "REMOVE-USERS"){
            
            let newProject = await Project.findById(body.projectId);
            if(newProject){
                // Xóa user khỏi project
                body.usersInfo.map((user) =>
                    newProject.usersInfo.pull(user)
                );
                response = await newProject.save();
            }
        }
        return response;
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}

export const getAllProjects = async (queryString) => {
    try {
        const page = queryString.page || 1;
        
        const {filter, limit,population} = aqp(queryString);
        const offset = (page-1) * limit;
        delete filter.page;

        const response = await Project.find(filter).limit(limit).skip(offset).populate(population)
        return response;
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}

export const deleteProject = async (id) => {
    try {
        const response = await Project.deleteById(id);
        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}

export const updateProject = async (body) => {
    try {
        const response = await Project.updateOne({_id:body.id},body);
        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error
        }
    }
}