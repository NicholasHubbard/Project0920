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
import runningImg from '../../images/running.jpg';
import styles from './styles.module.css';

// Styles specific to the Material UI components
const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxWidth: 500,
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    top: '0px'
  },
  media: {
    height: 200,
    padding: '5em 1em 5em 1em',
    position: 'relative',
    top: '0px'
  }
});

// Standing in for JSON API: Creating function that will make a sudo list for later API use
function Exercises() {
  const [list] = useState([
    {
      exerciseId: 1,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      exerciseId: 2,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      exerciseId: 3,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      exerciseId: 4,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      exerciseId: 5,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    },
    {
      exerciseId: 6,
      exerciseImg: runningImg,
      title: 'Run Your Heart Out!',
      text:
        'Run, run, and run some more.  Look into this great workout to see how you can improve on your workout.'
    }
  ]);

  return (
    <div>
      <Container>
        <Typography variant='h3' className={styles.topBar}>
          Exercises
        </Typography>
        <Grid container spacing={2}>
          {list.map((exercise, index) => (
            <Grid item lg={4}>
              <MediaCard
                key={exercise.id}
                index={index}
                exercise={exercise}
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
function MediaCard({ exercise }) {
  const classes = useStyles();

  return (
    <div className={styles.list}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={runningImg}
            title='Running'
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              {exercise.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {exercise.text}
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
