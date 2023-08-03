import express from "express";
import APIController from "../controllers/APIController";
import customers from "../controllers/customers";
import projects from "../controllers/projects";
import tasks from "../controllers/tasks";
const routerAPI = express.Router();

routerAPI.get("/users", APIController.getUsers);
routerAPI.post("/users", APIController.createUsers);
routerAPI.put("/users/:id", APIController.updateUsers);
routerAPI.delete("/users/:id", APIController.deleteUsers);

routerAPI.post('/file', APIController.uploadSingleFile);
routerAPI.post("/files", APIController.uploadMultipleFile);
// customer
routerAPI.post('/customers', customers.createCustomer);
routerAPI.get("/customers", customers.getAllCustomers);
routerAPI.post("/customers-many", customers.createManyCustomers);
routerAPI.put("/customers/:id", customers.updateCustomer);
routerAPI.delete("/customers/:id", customers.deleteCustomer);
routerAPI.delete("/customers", customers.deleteManyCustomers);

// project
routerAPI.post('/projects', projects.createEmtyProject);
routerAPI.get("/projects", projects.getAllProjects);
routerAPI.put("/projects", projects.updateProject);
routerAPI.delete("/projects/:id", projects.deleteProject);

// Task
routerAPI.post('/tasks', tasks.createEmtyTask);
routerAPI.get("/tasks", tasks.getAllTasks);
routerAPI.put("/tasks", tasks.updateTask);
routerAPI.delete("/tasks/:id", tasks.deleteTask);


module.exports = routerAPI;
