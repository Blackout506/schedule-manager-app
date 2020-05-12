import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import NavItems from '../NavItems/NavItems';

const navbar = (props) => {

  const navigation = ['Sign In', 'Search', 'Calendar', 'Schedule']

  return (
    <div className={'NavBar'}>
      <Link to='/'>
        <h3 className={'Header'}>Nameless Schedule App</h3>
      </Link>
      <NavItems className={'Items'} nav={navigation}/>
    </div>
  )
};

export default navbar;
