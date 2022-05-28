import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import GradeIcon from '@material-ui/icons/Grade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  share: {
      marginLeft: 'auto'
  },
  avatar: {
    backgroundColor: red[500],
  },
  reviews: {
      paddingLeft: "1.2em",
      paddingTop: "0.5em",
  },
  priceTag: {
      border: "2px solid red",
      textTransform: "lowercase"
  },
}));

export default function RecipeReviewCard({service}) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} service-card`}>
      <CardMedia
        className={classes.media}
        image={service.profileimage}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
            {service.name}
        </Typography>
        <Typography variant="body" color="textSecondary" component="p">
            {
                ((service.address).length>50)?((service.address).substring(0,50)+"...."): service.address
            }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
            <Badge badgeContent={service.rating} color="secondary">
                <GradeIcon/>
            </Badge>
        <Typography color='primary' variant='body1' className={classes.reviews}>{service.reviews} reviews</Typography>
      </CardActions>
      <CardActions disableSpacing>
        <Button variant="contained" size="large" color="secondary" aria-label="buy" className='priceTag' >
            &#8377; {service.price}
        </Button>
        <IconButton className={classes.share} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
