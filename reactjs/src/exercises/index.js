import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import runningImg from '../images/running.jpg';
import styles from './styles.module.css';
import container from './container';

class Exercises extends Component {
  exercisesAPI = async () => {
    const { fetchExercises } = this.props;
    await fetchExercises();
  };

  state = {
    exercises: [
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
    ]
  };

  mediaCard = ({ exercise }) => {
    return (
      <div className={styles.list}>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.media}
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
            <Button
              size='small'
              color='secondary'
              style={{ marginRight: '1em' }}
            >
              Open
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Container>
          <Typography variant='h3' className={styles.topBar}>
            Exercises
          </Typography>
          <Grid container spacing={2}>
            {this.state.exercises.map((exercise, index) => (
              <Grid item lg={4}>
                {this.mediaCard({
                  key: exercise.id,
                  index,
                  exercise,
                  style: { width: '100%' }
                })}
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

Exercises.propTypes = {};

export default container(Exercises);
