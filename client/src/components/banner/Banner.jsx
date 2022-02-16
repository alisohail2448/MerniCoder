import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

import  img  from "../../assets/banner.png";



const usesStyles = makeStyles(theme =>({
  image:{
      // background:`url(${"https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXIsc2V0dXB8fHx8fHwxNjQ0NjU5NTkx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"})`,
      background: `url(${img})`,
      // center/55% repeat-x #000000,
      backgroundSize: 'cover',
      width:'100%',
      height: "50vh",
      display: "flex",
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      '& :first-child':{
        fontSize:70,
        color: "#ffffff",
        lineHeight:1.5,
        fontFamily:'Pacifico',
    [theme.breakpoints.down('md')]:{
      fontSize:50,
    }


      },
      '& :last-child':{
        fontSize:18,
        color: '#ffffff',
        padding:10,
        // background: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)',
        // background: 'black',
        fontFamily:'Pacifico',
    },
  
  }
}));

const Banner = () => {
  const classes = usesStyles();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
  return (
    <Box className={classes.image}>
      <Typography className={classes.main}>iCoder Blog</Typography>
      <Typography>Technology, News, Devlopment & Trends</Typography>
    </Box>
  )
}

export default Banner;