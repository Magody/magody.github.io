import React from 'react';
import Presentation from '../components/home/Presentation';
import Profile from '../components/profile/Profile';
import Social from '../components/profile/Social';

const index = () => {

  return (
    <React.Fragment>
      <Presentation />
      <Social />
      <Profile />
    </React.Fragment>
    
  );
}

export default index;
