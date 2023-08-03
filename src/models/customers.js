import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    phone: String,
    address: String,
    description: String,
    image: String,

},
{
    timestamps: true,
})
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;