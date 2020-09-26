import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './ProductCard.module.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({id,name,description,price,imgUrl,deleteProduct, ...props}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div className={styles.btnArea}>
          <HighlightOffIcon className={styles.delete} onClick={() =>{deleteProduct(id)}}/>
        </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
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
