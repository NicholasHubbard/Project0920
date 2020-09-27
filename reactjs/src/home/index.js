import React, { Component } from 'react';
import PageCarousel from '../pageCarousel/index';
import Exercises from '../exercises/index';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <div>
        <PageCarousel />
        <Exercises />
      </div>
    );
  }
}

export default Home;
