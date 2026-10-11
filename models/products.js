import mongoose from "mongoose";

const productSchema= new mongoose.Schema({




    name:{
        type:String,
        required:true,
    },
    biboron:{
        type:String,
        required:true, 
    },
    price:{
        type:Number,
        required:true, 
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true})

export default mongoose.models.product || mongoose.model("product",productSchema)