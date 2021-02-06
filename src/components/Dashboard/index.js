import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GlobalContext from '../../utils/context'
import LoadingSpinner from '../LoadingSpinner'
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
                   hello khjkjhjkhjkhjkhdsakjhdjkd  dsdsjh dkjhdk jhds
                </Box>
                <Box className={classes.box}  m={1} width="40%">
                  world kjhjkdsh d dshd kdkjdhdkjsh dhsda kh dh dkjhdskjhdskjh 
                </Box>
            </Container>
};
export default Dashboard;