import { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom'
import { getPost, deletePost, updatePost } from '../../service/api';

import { LoginContext } from '../../context/ContextProvider';

//components
import Comments from './comments/Comments';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons:{
        float:'right'
    },
    icon:{
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10,
        '&:first-child:hover':{
            background: '#000000',
            color:'#ffffff'
        },
        '& :last-child:hover':{
            background: '#ff0000',
            color:'#fdfdfd'
        }
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));


const DetailView = ({ match }) => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXIsc2V0dXB8fHx8fHwxNjQ0NjQ3NzAx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600';
    const history = useHistory();
    
    const [post, setPost] = useState({});
    const { account, setAccount } = useContext(LoginContext);
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
        console.log(account, post.username);
    }, []);

    const deleteBlog = async () => {    
        await deletePost(post._id);
        history.push('/')
    }

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="post" className={classes.image} />
            <Box className={classes.icons}>
           
                    <Link to={`/update/${post._id}`}  style={{textDecoration:'none', color:'inherit'}}><Edit className={classes.icon}/></Link>
                    <Delete onClick={() => deleteBlog()} className={classes.icon} color="error" />
        
               
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.author}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>

            <Typography className={classes.detail}>{post.description}</Typography>
            <Comments post={post} />
        </Box>
    )
}

export default DetailView;