import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import carousel1 from '../../images/pushup.png';
import carousel2 from '../../images/warrior.png';
import carousel3 from '../../images/yoga.png';

// Carousel to flip through the highlighted front page
class PageCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        style={styles.container}
      >
        <div style={styles.imgContainer}>
          <img src={carousel1} alt='first slide' style={styles.imgStyle} />
          <Button
            className='legend'
            style={styles.typography}
            href='https://www.afpc.af.mil/Portals/70/documents/06_CAREER%20MANAGEMENT/03_Fitness%20Program/Fitness%20Charts.pdf'
          >
            Air Force PT Score Chart
          </Button>
        </div>
        <div style={styles.imgContainer}>
          <img src={carousel2} alt='second slide' style={styles.imgStyle} />
          <Button
            className='legend'
            style={styles.typography}
            href='https://www.woundedwarriorproject.org/'
          >
            Support the Wounded Warrior Project
          </Button>
        </div>
        <div style={styles.imgContainer}>
          <img src={carousel3} alt='thrid slide' style={styles.imgStyle} />
          <Button
            className='legend'
            style={styles.typography}
            href='https://www.military.com/military-fitness/fitness-test-prep/how-to-increase-your-mental-toughness-for-physical-tests'
          >
            Get Mentally Motivated for your PT Test!
          </Button>
        </div>
      </Carousel>
    );
  }
}

export default PageCarousel;

// Styles used for this component
const styles = {
  container: {
    marginTop: '5rem'
  },
  imgContainer: {
    width: '100%',
    minHeight: '300px',
    maxHeight: '600px',
    position: 'relative'
  },
  imgStyle: {
    maxWidth: 'auto',
    height: 'auto',
    objectFit: 'cover',
    textAlign: 'center',
    position: 'relative'
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontSize: '18px'
  }
};
