import PostMessage from "../models/postSchema.js";

export const getPosts=async(req,res)=>{
try{
    const postMessage=await PostMessage.find();
    res.status(200).json(postMessage);
}
catch(error){
    res.status(404).json({message:error.message});
}

}
export const createPost=async(req,res)=>{
    const { title, creator,message, tags} = req.body;
    console.log(1);//not working    
    const newPostMessage = new PostMessage({ title, creator,message, tags})

    //passing entered values from frontend to model
    try{
        await newPostMessage.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(404).json({message:error.message});

    }
    }