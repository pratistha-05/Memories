import PostMessage from "../models/postSchema.js";
const router = express.Router();
import express from 'express';

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
    const { title, creator,message, tags,selectedFile} = req.body;
    const newPostMessage = new PostMessage({ title, creator,message, tags,selectedFile})

    //passing entered values from frontend to model
    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    }