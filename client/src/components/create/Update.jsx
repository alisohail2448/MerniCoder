import React, { useState, useEffect } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle as Add } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { updatePost, uploadFile, getPost } from '../../service/api';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    publish: {
        background: "#000000",
        color: "white",
        "&:hover": {
          fontWeight: "bold",
          color: "#000000",
          border: "1px solid #000000",
          background: "white",
        },
      },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
}

const Update = ({ match }) => {
    const classes = useStyle();
    const history = useHistory();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const url = 'https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXIsc2V0dXB8fHx8fHwxNjQ0NjcyODE2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600';
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImageURL(image.data);
            }
        }
        getImage();
    }, [file])

    const updateBlogPost = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box className={classes.container}>
            <img src={post.picture || url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title" className={classes.textfield} />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary" className={classes.publish}>Update</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
                value={post.description}
            />
        </Box>
    )
}

export default Update;