import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,

})

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: String,
    endDate: String,
    customerInfo: customerSchema,
    usersInfo: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    description: String,
    leader:userSchema,
    task:[{type: mongoose.Schema.Types.ObjectId, ref: "Task"}]

},
{
    timestamps: true,
})
projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;