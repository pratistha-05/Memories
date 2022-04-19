import React from 'react';
import { CardMedia} from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from './styles';

const Posts=()=>{
    const posts=useSelector((state)=>state.posts);//posts from combinedreducer posts variable
    const classes = useStyles();
    console.log(posts);
    return (
        
        <Grid container classname={classes.container} spacing={3} style={{marginTop:'30px'}}>
            {posts.map((post)=>(
                
                <Grid item xs={12} sm={4} key={post._id}>
                    <Card className={classes.card}>
                        <CardMedia image={post.selectedFile} title={post.title} className={classes.media}/>
                        <div>
                            <Typography variant="h6" className={classes.creator}>{post.creator}</Typography>
                            <Typography variant="body2" className={classes.time}>{moment(post.createdAt).fromNow()}</Typography>
                        </div>
                        <div >
                              <Typography variant="body2" color="textSecondary" component="h2"  className={classes.tag}>{post.tags.map((tag) => `#${tag} `)}</Typography>
                        </div>
                        <Typography  gutterBottom variant="h5" component="h2"  className={classes.title}>{post.title}</Typography>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p"  className={classes.msg}>{post.message}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                            <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))

            }
            
        </Grid>
    )
}

export default Posts;

