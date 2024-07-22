import mongoose from "mongoose"

export const ConnectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGOOSE_URL || ``)
        if(connect){
            console.log("Connected DB")
        }
    } catch (error) {
        console.log('Some thing wrong',error)
    }   
}