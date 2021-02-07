import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Post from '../ListPosts/post'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor:'#333'
    },
  }));

const ListPosts = (props) => {
    const { posts } = props;
    const classes = useStyles();
    if(posts){
      return  posts.map((post, index) => <Post key={index} title={post.title} body={post.body} />)
    }
    return "";
};
export default ListPosts;