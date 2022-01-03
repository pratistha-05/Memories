import React from 'react';
import { useSelector } from 'react-redux';

const Posts=()=>{
    const post=useSelector((state)=>state.posts);//posts from combinedreducer posts variable
    console.log(post);
    return (
        <h2>Post</h2>
    )
}

export default Posts;