import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {type:String,required:true,unique:true},
    username: {type:String,required:true},
},{timestamps:true})

const User = mongoose.model('User',userSchema) || mongoose.models.User

export default User