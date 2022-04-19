import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FileBase from 'react-file-base64';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/PostsActions';
import useStyles from './styles';


const Form=()=>{
    const classes = useStyles();

    const [data,setData]=useState({
        title:'',creator:'',message:'',tags:'',selectedFile:''
    })
    const dispatch=useDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();//to avoid refresh
        dispatch(createPost(data));//first the form sends all data to action of the reducer by creating a dispatch 
    }
    //data contains entire post
    const clear=()=>{

    }
    return (
        <Paper elevation={0} style={{margin:'30px',width:'70%',display:'block',marginLeft:'auto',marginRight:'auto'}}>
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography className={classes.heading} variant='h6' align='center'>Creating a memory</Typography>

            <TextField name="title" 
            variant="outlined" 
            label="Title of this memory"
            fullWidth 
            value={data.title} 
            onChange={(e) => setData({ ...data, title: e.target.value })}/>

            <TextField name="creator" 
            variant="outlined" 
            label="Creator"
            fullWidth 
            value={data.creator} 
            onChange={(e) => setData({ ...data, creator: e.target.value })}/>

            <TextField name="message" 
            variant="outlined" 
            label="Type a message"
            fullWidth 
            value={data.message} 
            onChange={(e) => setData({ ...data, message: e.target.value })}/>

            <TextField name="tags" 
            variant="outlined" 
            label="Any tags"
            fullWidth 
            value={data.tags} 
            onChange={(e) => setData({ ...data, tags: e.target.value })}/>
                
            <div >
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })} />
            </div>

            <Button  variant='contained' color="primary" size="large" type="submit"  fullWidth gutter>Submit</Button> 
            <Button onClick={clear} variant='contained' color="secondary" size="small" fullWidth>clear</Button>   
  
        </form>
        </Paper>
    )
}

export default Form;