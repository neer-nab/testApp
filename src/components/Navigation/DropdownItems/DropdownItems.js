import React from 'react';
import DropDownItem from './DropdownItem/DropdownItem';
import Aux from '../../../hoc/Aux/Aux';
import classes from './DropdownItems.css';
import Avatar from '../../../assets/avatar.jpg'
const dropdownitems = (props) => (
    <div className={classes.dropdown} style={{"float":"right"}}>
        
        <button className={classes.dropbtn}><i className="fa fa-2x fa-user-circle"></i></button>
        
        <div className={classes.dropdownContent}>
            <DropDownItem link="/">Profile</DropDownItem>
            <DropDownItem link="/">Statistics</DropDownItem>
            <DropDownItem link="/">CheatSheet</DropDownItem>
            <DropDownItem link="/">Feedback</DropDownItem>
            <DropDownItem link="/logout">Logout</DropDownItem>
        </div>
    </div>

)

export default dropdownitems;