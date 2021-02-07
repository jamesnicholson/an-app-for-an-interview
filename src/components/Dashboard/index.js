import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import GlobalContext from '../../utils/context'
import LoadingSpinner from '../LoadingSpinner'
import SearchPosts from '../SearchPosts'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    const [ state ] = useContext(GlobalContext);

    if(state.loading){
      return <LoadingSpinner />
    }
    return  <div>
                {state.refresh? <LinearProgress  color="secondary"/> : null}
                <Container className={classes.root}>
                <h1>Posts</h1>
                <SearchPosts />
              </Container>
           </div>

            

};
export default Dashboard;