import React from 'react'

import Cart from '../shoopingCart/Cart';
import SearchBar from "../searchBar/SearchBar"
import AcountIcon from '../acountIcon/AcountIcon';
import Menu from '../menu/Menu';
import "./Navbar.css"

function Navbar() {
    return (
        <div className = "navbar">
            <img className = "logo" src="logo.png" alt="logo"/>
            <Menu/>
            <SearchBar/>
            <AcountIcon/>
            <Cart/>
        </div>
    )
}

export default Navbar
