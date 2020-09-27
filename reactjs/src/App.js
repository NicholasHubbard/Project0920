import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './app.module.css';
import Header from './header';
import Home from './home';
import Exercises from './exercises';
import Blogs from './blogs';
import Profile from './profile';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.body}>
          <Route path='/' component={Header} />
          <main className={styles.main__container} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/exercises' exact component={Exercises} />
            <Route path='/blogs' exact component={Blogs} />
            <Route path='/profile' exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
