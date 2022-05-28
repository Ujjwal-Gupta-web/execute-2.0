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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
  modalservice:{
    width: "100%",
    height: "300px",
    marginRight: "2em"
  },
  modalservices:{
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "500px"
  }
}));

export default function RecipeReviewCard({service}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
      <>

        <Card className={`${classes.root}`} onClick={handleClickOpen}>
        <CardMedia
            className={classes.media}
            image={service.profileimage}
            // title="Paella dish"
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
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="lg"
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {"Service Name"}
            </DialogTitle>
            <DialogContent className={classes.modalservices+""} >
            <CardMedia
                className={classes.media+" "+classes.modalservice}
                image={service.profileimage}
            />
            <DialogContentText id="alert-dialog-slide-description">
                <Typography color='secondary' variant='h6' className={classes.reviews}>
                    Services we Provide
                </Typography>
                <Typography color='default' variant='p' className={classes.reviews}>
                    {/* {service.address} */}
                    {service.service}
                </Typography>
                
                <Typography color='default' variant='body2' className={classes.reviews}>
                    {service.address}
                </Typography>
            </DialogContentText>
            
            </DialogContent>
            <DialogActions style={{display: "flex","justifyContent":"space-between"}}>
            <CardActions disableSpacing>
                    <Badge badgeContent={service.rating} color="secondary">
                        <GradeIcon/>
                    </Badge>
                <Typography color='primary' variant='body1' className={classes.reviews}>{service.reviews} reviews</Typography>
            </CardActions>
            <CardActions disableSpacing >
                <Button variant="contained" size="large" color="secondary" aria-label="buy" className='priceTag' >
                    &#8377; {service.price}
                </Button>
                <IconButton className={classes.share} aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            {/* <Button onClick={handleClose} color="primary">
                Agree
            </Button> */}
            </DialogActions>
        </Dialog>
      </>
  );
}
