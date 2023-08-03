import Customer from '../models/customers';
import aqp from "api-query-params";
export const createCustomer = async (body,image) => {
    try {
        let response = await Customer.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            address: body.address,
            description: body.description,
            image: image
        });

        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}
export const createManyCustomers = async (body) => {
    try {
        let response = await Customer.insertMany(body);

        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}
export const getAllCustomers = async (limit,skip,queryString) => {
    try {
        let response
        
        const { filter, sort, projection, population } = aqp(queryString);
        delete filter.limit;
        if(queryString){
            response = await Customer.find(filter).limit(limit).skip(skip).exec();
        } else{
            response = await Customer.find({});
        }
        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}
export const updateCustomer = async (id,body) => {
    try {
        let response = await Customer.updateOne({_id:id},body);

        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}

export const deleteCustomer = async (id) => {
    try {
        let response = await Customer.deleteById(id);

        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}
export const deleteManyCustomers = async (id) => {
    try {
        let response = await Customer.delete({ _id: { $in: id }});

        return {
            err:0,
            data:response
        };
    } catch (error) {
        return {
            err:1,
            mes:error.message
        };
    }
}