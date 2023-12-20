import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
{ 
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    requlat
}
)