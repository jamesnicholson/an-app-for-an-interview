import React, { useState, useEffect, useContext } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop:'30px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  loader:{
    margin: '0 auto',
    
  }
}));


const LoadingSpinner = () => {
  const classes = useStyles();
  return  <Container className={classes.root}>
            <CircularProgress className={classes.loader} />
          </Container>
};
export default LoadingSpinner;