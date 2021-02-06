import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor:'#333'
    },
  }));

const EditPost = () => {
    const classes = useStyles();

    const { updatePost } = useContext(GlobalContext);

    return  <div>
        <h1>Edit Post</h1>
    </div>
};
export default EditPost;