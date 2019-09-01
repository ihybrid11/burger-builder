import React from 'react';
import classes from './DrawerToggle.css';
import Logo from '../../../Logo/Logo';


const drawerToggle = (props) => (
    <div onClick={props.clicked}>
        MENU
    </div>
);

export default drawerToggle;