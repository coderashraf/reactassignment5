import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      )
}}
