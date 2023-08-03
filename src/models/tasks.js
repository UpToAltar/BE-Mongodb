import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: String,

    endDate: String,
    description: String,
})
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: String,
    startDate: String,
    endDate: String,
    description: String,
    userInfo:userSchema,
    projectInfo:projectSchema,
},
{
    timestamps: true,
})
taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;