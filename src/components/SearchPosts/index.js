import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../../utils/context'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditPost from '../EditPost'
import ListPosts from '../ListPosts'
const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: '15px'
    },
    formControl: {
      width:'100%',
      marginBottom: '15px'
    }
  }));

const SearchPosts = () => {
    const classes = useStyles();
    const [state]= useContext(GlobalContext);
    const {posts, loading} = state;
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
      setList(posts.posts)
     }else{
      setList(posts.posts.filter(({deleted})=>!deleted))
     }
  },[state.refresh, checked])

   useEffect(()=>{
     if(searchTerm){
       setList(posts.posts.filter(({title, body})=> {
         return title.toLowerCase().includes(searchTerm) || body.toLowerCase().includes(searchTerm)
       }))
     }
  },[searchTerm])

    if(loading == false){
      return  <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="gilad" />}
                    label="Include Deleted"
                  />
                </FormGroup>
                <FormGroup>
                    <TextField id="search" fullWidth label="Search" onChange={textChange} variant="outlined" />
                </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <ListPosts posts={list} />
          </Grid>
          <Grid item xs={6}>
            <EditPost />
          </Grid>
        </Grid>

              </div>
    }
    return "";

};
export default SearchPosts;