import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email: {
        type : String,
        unique : true
    },
    phone : {
        type  : String
    }
})

export const Client = mongoose.model('Client', ClientSchema)

