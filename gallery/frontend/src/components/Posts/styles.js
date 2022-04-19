import { makeStyles } from '@mui/styles';
import { shadows } from '@mui/system';
const useStyles = makeStyles({
    container:{
        display: 'flex',
        alignItems: 'center',
        margin:'20px',
        shadows: '2px 2px 3px'     
    },
   
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      creator:{
          position:'absolute',
          color:'white',
          textDecoration:'bold',
          fontFamily:'serif',
          top:'2px',
          left:'18px',
          fontSize:'24px'
      },
      time:{
        position:'absolute',
        color:'white',
        textDecoration:'bold',
        fontFamily:'serif',
        top:'30px',
        left:'18px'
    },
    tag:
    {
      marginLeft:'10px'
    },
    title:
    {
      marginLeft:'10px'
    },
});
export default useStyles;