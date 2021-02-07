import React, { useState, useEffect, useContext } from 'react'
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop:'30px',
  },
  loader:{
    margin: '0 auto',
    
  },
  backdrop: {
    backgroundColor:'#00000060',
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const LoadingSpinner = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return  <Backdrop className={classes.backdrop} open={open} onClick={handleClose} >
            <CircularProgress className={classes.loader} />
          </Backdrop>
};
export default LoadingSpinner;