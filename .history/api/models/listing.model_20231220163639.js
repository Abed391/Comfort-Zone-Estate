import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
{ 
    name:{
        type: String,
        required: true,
    },
    description:{}
 
}
)