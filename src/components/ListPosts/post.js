import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {SELECTED_POST} from '../../utils/enums';
import GlobalContext from '../../utils/context'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom:'10px'
    },
    deletedRoot: {
        backgroundColor:'#c3c1c1',
        color:'#ffffff',
        marginBottom:'10px'
    },
    chips: {
        float:'right',
    }
  }));

const Post = (props) => {

    const { id, title, body, deleted } = props;
    const classes = useStyles();
    const [state, dispatch ]= useContext(GlobalContext);
    const handleClick = (id) => {
        dispatch({
            type: SELECTED_POST,
            payload:{
                selected_post_id: id
            }
        })
    }
    const truncate = (input) => {
        if (input.length > 5) {
           return input.substring(0, 75) + '...';
        }
        return input;
     };
    return  <Card className={deleted ? classes.deletedRoot : classes.root} onClick={()=>(handleClick(id))}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {truncate(body)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Edit
                </Button>
                {deleted ? <Chip className={classes.chips} label="Deleted" color="secondary"/> : null}
            </CardActions>
        </Card>
};
export default Post;