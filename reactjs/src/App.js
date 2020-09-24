import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Home from './components/home';
import Exercises from './components/exercises';
import Blogs from './components/blogs';
import Profile from './components/profile';
import LoginModal from './components/login';

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Route path='/' component={Header} />
        <main className={styles.main__container} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/exercises' exact component={Exercises} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/login' exact component={LoginModal} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
