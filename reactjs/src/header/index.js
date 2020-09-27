import React, { Component, Fragment } from 'react';
import { AppBar, IconButton, InputBase, Toolbar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import styles from './styles.module.css';
import Logo from '../images/milfitLogo.png';
import LoginModal from '../login';
import SignUpModal from '../signup';

class Header extends Component {
  state = { LoggedIn: false, open: false };

  logUserOut = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { LoggedIn } = this.props;
    return (
      <>
        <AppBar
          position='fixed'
          style={{
            backgroundColor: '#1e1e1e'
          }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <NavLink to='/'>
              <img
                src={Logo}
                alt='logo'
                style={{ width: '35px', marginRight: '1em' }}
              />
            </NavLink>

            <div className={styles.menuIcon}>
              <IconButton onClick={this.handleOpen} color='inherit'>
                <Menu />
              </IconButton>
            </div>

            <div className={styles.linkIcons}>
              <IconButton>
                <NavLink to='/' className={styles.header__link}>
                  Home
                </NavLink>
              </IconButton>
              <IconButton>
                <NavLink to='/exercises' className={styles.header__link}>
                  Exercises
                </NavLink>
              </IconButton>
              <IconButton>
                <NavLink to='/blogs' className={styles.header__link}>
                  Blog
                </NavLink>
              </IconButton>
              <IconButton>
                <NavLink to='/profile' className={styles.header__link}>
                  Profile
                </NavLink>
              </IconButton>

              {this.state.loggedIn && (
                <>
                  <button
                    type='button'
                    onClick={this.logUserOut}
                    className={styles.header__link}
                    style={{ marginLeft: 'auto' }}
                  >
                    logout
                  </button>
                </>
              )}

              {!this.state.loggedIn && (
                <>
                  <p
                    to='/login'
                    className={styles.header__link}
                    style={{ marginLeft: 'auto' }}
                  >
                    <LoginModal />
                  </p>
                  <p to='/forms/signup' className={styles.header__link}>
                    <SignUpModal />
                  </p>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>

        <div
          onClick={this.handleOpen}
          style={{ display: this.state.open ? 'block' : 'none' }}
        >
          <div
            className={styles.mobileMenu}
            style={{ display: this.state.open ? 'flex' : 'none' }}
          >
            <IconButton>
              <NavLink to='/' className={styles.header__link}>
                Home
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink to='/exercises' className={styles.header__link}>
                Exercises
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink to='/blogs' className={styles.header__link}>
                Blog
              </NavLink>
            </IconButton>
            <IconButton>
              <NavLink to='/profile' className={styles.header__link}>
                Profile
              </NavLink>
            </IconButton>

            {this.state.loggedIn && (
              <>
                <button
                  type='button'
                  onClick={this.logUserOut}
                  className={styles.header__link}
                  style={{
                    padding: '4px'
                  }}
                >
                  logout
                </button>
              </>
            )}

            {!this.state.loggedIn && (
              <>
                <p
                  to='/login'
                  className={styles.header__link}
                  style={{
                    padding: '4px'
                  }}
                >
                  <LoginModal />
                </p>
                <p
                  to='/forms/signup'
                  className={styles.header__link}
                  style={{
                    padding: '4px'
                  }}
                >
                  <SignUpModal />
                </p>
              </>
            )}
          </div>
          <div
            className={styles.menuBackground}
            onClick={this.handleOpen}
          ></div>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  history: RRPropTypes.history.isRequired
};

Header.defaultProps = {
  loggedIn: false
};

export default Header;
