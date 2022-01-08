 import * as api from '../api/index.js'

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
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("data recieved")
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
  