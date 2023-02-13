import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__blocks">
                <Tooltip title="Delete">
                <IconButton>
                    <FaHome />
                </IconButton>
                </Tooltip>
                </div>
                <div className="nav__blocks"></div>
                <div className="nav__Blocks"></div>
            </div>
        )
    }
}