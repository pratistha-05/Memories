 import * as api from '../api/index'

export const getPosts = () => async(dispatch) =>{ //REDUX THUNK
    try{
        const {data}=await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload: data});

    }
    catch(error){
       console.log(error.message);

    }
}
//creating a new post after clicking submit from submit in form
export const createPosts=(post)=> async(dispatch)=>{
    try{
        const {data}=await api.createPosts(post);//making api request in backend and sending entire post
        dispatch({type:'CREATE',payload:data})
        
    }
    catch(error){
           console.log(error); 
    }
}