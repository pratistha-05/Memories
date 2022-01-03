import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    title:String,
    creator:String,
    message:String,
    tags:[String],
    //file:String,
    /*likes:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:new Date()
    }
    */
})

const postMessage=mongoose.model('postMessage',postSchema);

export default postMessage;