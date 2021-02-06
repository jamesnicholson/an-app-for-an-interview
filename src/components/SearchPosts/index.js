import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'
import ListPosts from '../ListPosts'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor:'#333'
    },
  }));

const SearchPosts = () => {
    const classes = useStyles();
    const { data, loading } = useContext(GlobalContext);
    const list = data.posts.filter((post)=>post.deleted == false);
    if(loading == false){
      return  <div>
                <h1>Edit Post</h1>
                <ListPosts posts={list} />
              </div>
    }
    return "";

};
export default SearchPosts;