import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GlobalContext from '../../utils/context'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin:'10px'
    },
  }));

const Post = (props) => {
    const { id, title, body } = props;
    const classes = useStyles();
    const { setCurrentPostId } = useContext(GlobalContext);
    const handleClick = (id) => {
        setCurrentPostId(id)
    }
    const truncate = (input) => {
        if (input.length > 5) {
           return input.substring(0, 75) + '...';
        }
        return input;
     };
    return  <Card className={classes.root} onClick={()=>(handleClick(id))}>
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
            </CardActions>
        </Card>
};
export default Post;