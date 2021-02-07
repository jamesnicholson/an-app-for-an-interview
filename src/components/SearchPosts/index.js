import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    const [checked, setChecked] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const textChange = (event) => {
      setSearchTerm(event.target.value)
    }
   useEffect(()=>{
     if(checked){
      setList(data.posts)
     }else{
      setList(data.posts.filter(({deleted})=>!deleted))
     }
  },[checked])

   useEffect(()=>{
     if(searchTerm){
       setList(data.posts.filter(({title, body})=> {
         return title.toLowerCase().includes(searchTerm) || body.toLowerCase().includes(searchTerm)
       }))
     }
  },[searchTerm])

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
                       <TextField id="search" label="Search" onChange={textChange} variant="outlined" />
                    </FormGroup>
                </FormControl>
                <ListPosts posts={list} />
              </div>
    }
    return "";

};
export default SearchPosts;