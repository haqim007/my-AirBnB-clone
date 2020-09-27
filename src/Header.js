import React from 'react';
import './Header.css';
import {
  Search as SearchIcon,
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon
} from "@material-ui/icons";
import {Avatar} from '@material-ui/core'
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <Link to="/">
          <img
            src="https://content.fortune.com/wp-content/uploads/2014/07/new-logos-airbnb.jpg"
            alt="airbnb-logo"
            className="header_icon"
          />
        </Link>

        <div className="header_center">
          <input type="text" name="search" id="" />
          <SearchIcon />
        </div>

        <div className="header_right">
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
    );
}

export default Header
