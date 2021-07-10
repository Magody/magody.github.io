import React from 'react';
import Galaxy from '../components/3D/Galaxy';
import Presentation from '../components/profile/Presentation';
import Profile from '../components/profile/Profile';
import Social from '../components/profile/Social';

const index = () => {

  return (
    <React.Fragment>

      <Galaxy />

      <Presentation />
      <Social />

      <Profile />
    </React.Fragment>
    
  );
}

export default index;
