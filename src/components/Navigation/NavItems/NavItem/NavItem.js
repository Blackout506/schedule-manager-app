import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const navitem = (props) => {
  return (
    <Link className={'NavItem'} to={"/" + props.text.split(" ").join("")} onClick={props.clicked}>
      {props.text}
    </Link>
  );
};

export default navitem;
