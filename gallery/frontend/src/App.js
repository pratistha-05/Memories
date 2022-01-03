import React, { useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grow from '@mui/material/Grow';
import { Grid } from '@mui/material';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/PostsActions'
import { useDispatch } from 'react-redux';

const App=()=>{
  const dispatch=useDispatch();//hook to connect redux and the application
  useEffect(()=>{
    dispatch(getPosts());//dispatch(action method)
  },[]);
    return(
<Container >
<AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Memories
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

     
      <Grow in>
         <Container>
           
           <Grid container alignItems="stretch" justify="space-between">
             <Grid item xs={12} sm={6}>
              <Posts/>
             </Grid>
             <Grid xs={12} sm={6}>
               <Form/>
             </Grid>
             <Grid item xs={12} sm={6}>
              <Posts/>
             </Grid>
             <Grid item xs={12} sm={6}>
              <Posts/>
             </Grid>
           </Grid>
         </Container>
        </Grow>
          
        
     
</Container>
    )
}
export default App;