import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';

const Posts=()=>{
    const post=useSelector((state)=>state.posts);//posts from combinedreducer posts variable
    console.log(post);
    return (
        <Grid container alignItems="stretch" spacing={3}>
            {post.map=((post)=>(
                <Grid item xs={12} sm={6} key={post._id}>
                    <Card>
                        <CardMedia img={post.selectedFile} title={post.title}/>
                    </Card>
                </Grid>
            ))

            }
            
        </Grid>
    )
}

export default Posts;