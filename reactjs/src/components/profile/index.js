import React from 'react';
import styles from './styles.module.css';
import { Grid, Container, Paper, Card, Typography } from '@material-ui/core';
import profileImg from '../../images/yoga.png';

class Profile extends React.Component {
  render() {
    return (
      <Container className={styles.container}>
        <Typography variant='h3' className={styles.topBar}>
          Profile
        </Typography>
        <Paper className={styles.heading} elevation={3}>
          <Grid sm={5}>
            <Card>
              <img src={profileImg} className={styles.card} />
            </Card>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default Profile;
