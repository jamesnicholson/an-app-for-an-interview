import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GlobalContext from '../../utils/context'
import LoadingSpinner from '../LoadingSpinner'
import EditPost from '../EditPost'
import SearchPosts from '../SearchPosts'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      box: {
          background: 'red'
      }
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    const { loading } = useContext(GlobalContext);
   if(loading){
        return <LoadingSpinner />
    }
    return  <Container className={classes.root}>
                <Box className={classes.box} m={1} width="40%">
                   <h1>Posts</h1>
                   <SearchPosts />
                </Box>
                <Box className={classes.box} m={1} width="40%">
                  <EditPost />
                </Box>
            </Container>
};
export default Dashboard;