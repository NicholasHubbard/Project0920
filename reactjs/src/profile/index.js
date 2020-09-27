import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import {
  Grid,
  Container,
  Paper,
  Card,
  Typography,
  FormControl,
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import profileImg from '../images/yoga.png';

class Profile extends React.Component {
  render() {
    return (
      <Container className={styles.container}>
        <Typography variant='h3' className={styles.topBar}>
          Profile
        </Typography>
        <img src={profileImg} className={styles.image} />
        <FormControl fullWidth>
          <TextField
            id='filled-secondary'
            label='Username'
            defaultValue={this.props.userName}
            variant='filled'
            color='secondary'
          />

          <TextField
            id='filled-secondary'
            label='Email Address'
            defaultValue={this.props.emailAddress}
            variant='filled'
            color='secondary'
          />
          <TextField
            id='filled-secondary'
            label='Age'
            defaultValue={this.props.age}
            variant='filled'
            color='secondary'
          />
          <TextField
            id='filled-secondary'
            label='Height in inches'
            defaultValue={this.props.height}
            variant='filled'
            color='secondary'
          />
        </FormControl>
        <Button color='secondary'>Update</Button>
      </Container>
    );
  }
}

Profile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  emailAddress: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.string,
  weight: PropTypes.number,
  lastPTScore: PropTypes.number
};

Profile.defaultProps = {
  userName: 'UserName',
  emailAddress: 'kate.smith@aol.com',
  age: 33,
  height: '67',
  weight: 135,
  lastPTScore: 89.75
};

export default Profile;
