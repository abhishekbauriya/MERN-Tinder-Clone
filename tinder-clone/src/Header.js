import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
    return (
        <div className="header">

            {/* For CLick-able icon adding button */}
            <IconButton>
                {/* For Making Large Icons */}
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
                alt="tinder-logo"
            />
            
            {/* For CLick-able icon adding button */}
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
}

export default Header;
