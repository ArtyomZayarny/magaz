import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './ProductCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {deleteProduct} from '../../redux/store'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({id,name,description,price,imgUrl, ...props}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products =  useSelector(state => state.products);

  const remove = (id) => {
    const updatedProducts = products.filter( product => product.id !== id);
    dispatch(deleteProduct({products:updatedProducts}));
}

  return (
    <Card className={classes.root}>
        <div className={styles.btnArea}>
          <HighlightOffIcon className={styles.delete} onClick={() =>{remove(id)}}/>
        </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl ? imgUrl : './images/noimage.png'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
              {price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
