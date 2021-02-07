import React, { useState, useEffect, useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'

const useStyles = makeStyles((theme) => ({

    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

const EditPost = () => {
    const [post, setPost] = useState({});
    const classes = useStyles();
    const [ state, dispatch ] = useContext(GlobalContext);
    const { posts, selected_post_id } = state;
    useEffect(() => {
      if(selected_post_id > 0){
        setPost(posts.posts.filter(({id}) => id == selected_post_id).slice(0)[0]);
      }
    },[selected_post_id])

    const save = (_post) => {
        try {
           fetch(`/api/posts/${_post.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type':'application/x-www-form-urlencoded' },
              body: JSON.stringify(_post),
          });
      } catch(ex) {
        console.log(ex)
       }
    }

    if(Object.keys(post).length !== 0 ){
      return   <div>
                  <h2>Edit post</h2>
                  <form>
                    <TextField
                      variant="outlined"
                      onChange={(event) => {
                            setPost({ ...post, title: event.target.value });
                        }}
                      value={post.title ? post.title : ""}
                      margin="normal"
                      fullWidth
                      id="title"
                      label="Title"
                      name="title"
            
                    />
                     <TextField
                      variant="outlined"
                      value={post.body ? post.body : ""}
                      onChange={(event) => {
                        setPost({ ...post, body: event.target.value });
                      }}
                      margin="normal"
                      fullWidth
                      id="body"
                      label="Body"
                      name="body"
                      multiline
                    />
                    <Button onClick={()=>save(post)}>
                      Save
                    </Button>
                  </form>
                </div>
    }
    return ""

};
export default EditPost;