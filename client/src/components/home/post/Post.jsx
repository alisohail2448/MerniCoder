
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    },
    box:{
        "& :hover":{
            transform: "translateY(-8px)"
        },
    }
})

const Post = ({ post }) => {
    const classes = useStyle();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1628454714821-6e59206e91d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXIsc2V0dXB8fHx8fHwxNjQ0OTA5MjU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
       <Box className={classes.box}>
            <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography className={classes.textColor}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addEllipsis(post.title, 20)}</Typography>
            <Typography className={classes.textColor}>Author: {post.username}</Typography>
            <Typography className={classes.detail}>{addEllipsis(post.description, 100)}</Typography>
        </Box>
       </Box>
    )
}

export default Post;