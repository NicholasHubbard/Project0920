import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Logo from '../../images/milfitLogo.png';
import LoginModal from '../login';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // event handler to bring up profile menu with login/register/contact us
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  // mobile menu close when clicking away
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // event to handle the menu closer
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // event to open mobile menu
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // render menu object
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={styles.loginMenu}
    >
      <NavLink
        to='/login'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </NavLink>

      <NavLink
        to=''
        style={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </NavLink>

      <NavLink
        to=''
        style={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
      </NavLink>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to='/' className={styles.header__link__mobile}>
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/exercises' className={styles.header__link__mobile}>
          Exercises
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/blogs' className={styles.header__link__mobile}>
          Blog
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/profile' className={styles.header__link__mobile}>
          Profile
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <AccountCircle />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='fixed' style={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar position='sticky'>
          <NavLink to='/'>
            <img
              src={Logo}
              alt='logo'
              style={{ width: '35px', marginRight: '1em' }}
            />
          </NavLink>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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

            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool
};

Header.defaultProps = {
  loggedIn: false
};
