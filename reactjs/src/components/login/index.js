import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FormControl, TextField, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function LoginModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        marginBottom: '700px',
        marginLeft: 'auto'
      }}
    >
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormControl className={classes.root} noValidate autoComplete='off'>
              <Typography style={{ color: 'black' }}>LOGIN</Typography>
              <TextField
                id='filled-secondary'
                label='Email Address'
                variant='filled'
                color='secondary'
                style={{ color: 'white' }}
              />
              <TextField
                id='filled-secondary'
                label='Password'
                variant='filled'
                color='secondary'
              />
              <NavLink to='/'>
                <Button size='small' color='secondary'>
                  Login
                </Button>
              </NavLink>
            </FormControl>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
