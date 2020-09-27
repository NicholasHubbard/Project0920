import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import Pic1 from '../images/situps.jpg';
import Pic2 from '../images/inhomeworkout.jpg';
import Pic3 from '../images/yoga.png';
import Pic4 from '../images/running.jpg';
import styles from './styles.module.css';

// Styles specific to the Material UI components
const useStyles = makeStyles({
  card: {
    width: 'auto',
    backgroundColor: 'white',
    position: 'relative',
    top: '0px'
  },
  media: {
    height: 350,
    position: 'relative',
    top: '0'
  }
});

// Standing in for JSON API: Creating function that will make a sudo list for later API use
function Exercises() {
  const [list] = useState([
    {
      blogId: 1,
      blogImg: Pic1,
      title: 'A Day in the Life of a normal Medic',
      text:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      blogId: 2,
      blogImg: Pic2,
      title:
        'Run Your HeartHow to fit in 30 minute workouts to guarantee a passing PT Score Out!',
      text:
        'Run, Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus., and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      blogId: 3,
      blogImg: Pic3,
      title: 'Yoga makes my PT scores soar!',
      text:
        'Run, run, and Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      blogId: 4,
      blogImg: Pic4,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus..  Look into this great workout to see how you can improve on your workout.'
    }
  ]);

  return (
    <div>
      <Container>
        <Typography variant='h3' className={styles.topBar}>
          Blogs
        </Typography>
        <Grid container spacing={2}>
          {list.map((blog, index) => (
            <Grid item lg={12}>
              <MediaCard
                key={blog.id}
                index={index}
                blog={blog}
                style={{ width: '100%' }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

// Material UI Media Card that will be used for listing our different exercises
function MediaCard({ blog }) {
  const classes = useStyles();

  return (
    <div className={styles.list}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blog.blogImg}
            title='Blog Image'
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              {blog.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {blog.text}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button size='small' color='secondary' style={{ marginRight: '1em' }}>
            Open
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Exercises;
