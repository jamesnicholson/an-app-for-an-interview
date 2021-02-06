import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import ListPosts from '../ListPosts'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

const SearchPosts = () => {
    const classes = useStyles();
    const { data, loading } = useContext(GlobalContext);
    const [list, setList] = useState([]);
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
   useEffect(()=>{
     if(checked){
      setList(data.posts.filter(({deleted})=>!deleted))
     }else{
      setList(data.posts.filter(({deleted})=>deleted))
     }
  },[checked])

    if(loading == false){
      return  <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} name="gilad" />}
                        label="Include Deleted"
                      />
                    </FormGroup>
                    <FormGroup>
                       <TextField id="search" label="Search" variant="outlined" />
                    </FormGroup>
                 
                </FormControl>
                <ListPosts posts={list} />
              </div>
    }
    return "";

};
export default SearchPosts;