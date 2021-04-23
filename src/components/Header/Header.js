import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Badge, Paper, InputBase, Tooltip} from '@material-ui/core';
import {ShoppingCartOutlined, Search, Star,AccountCircle} from '@material-ui/icons';
import MenuIcon from "@material-ui/icons/Menu";
import logo from '../../assets/sneakicks-logo(darker-red-variant).png';

import useStyles from './header-styles';



const Header = () => {
    
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
        <div>
            <AppBar position = "fixed" className={classes.appBar}>
                <Toolbar>
                    <Tooltip title="Home" placement="bottom">
                        <Link to='/home' alt="Home">
                            <img src={logo} className={classes.logoImage} alt="Sneakicks"/>
                        </Link>
                    </Tooltip>

                    <Paper component="form" className={classes.searchPaper}>
                        <InputBase
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search sneakicks' }}
                        />
                        <IconButton type="submit" className={classes.searchButton} aria-label="search">
                            <Search />
                        </IconButton>
                    </Paper>
                    <Tooltip title="Favorites" placement="bottom">
                        <div className={classes.wishlistButton} marginLeft="1.5rem">
                            <IconButton aria-label="Wishlist" color="black" >
                                <Star className={classes.star}/>
                            </IconButton>
                        </div>
                    </Tooltip>
                    <Tooltip title="Cart" placement="bottom">
                        <div className={classes.cartButton}>
                            <IconButton aria-label="Cart Items">
                                <Badge badgeContent={2} color="secondary">
                                        <ShoppingCartOutlined className={classes.shoppingCart}/>
                                </Badge>
                            </IconButton>
                        </div>
                    </Tooltip>
                    <Tooltip title="Account" placement="bottom">
                        <div>
                            <IconButton
                                component={Link} to="/accountSignUp"
                                aria-label="Account"
                                aria-controls="menu-appbar"
                                aria-haspopup="true">
                            <AccountCircle className={classes.accountCircle}/>
                            </IconButton>
                        </div>
                    </Tooltip>
                </Toolbar>
                </AppBar>
        </div>
    )
}

export default Header
