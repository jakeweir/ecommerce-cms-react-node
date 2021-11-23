import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div id="navBar">
            <div id="user">
                <div className="userImg">
                </div>
                <h4>username</h4>
                <h5>company name</h5>
                <a href="#">domain name</a>
            </div>
            <nav id="mainMenu">
                <NavLink exact={true} activeClassName="is-active" className="menuItem" to="/">Dashboard</NavLink>
                <NavLink activeClassName="is-active" className="menuItem" to="/orders">Orders</NavLink>
                <NavLink activeClassName="is-active" className="menuItem" to="/customers">Customers</NavLink>
                <NavLink activeClassName="is-active" className="menuItem" to="/products">Products</NavLink>
                <NavLink activeClassName="is-active" className="menuItem" to="/media">Media</NavLink>
                <NavLink activeClassName="is-active" className="menuItem" to="/analytics">Analytics</NavLink>
            </nav>
            <div id="salesChannel">
                <h4>Sales Channels</h4>
                <div className="channels">
                    <a href="#">Store Page</a>
                    <a href="#">Featured Products</a>
                    <a href="#">
                        Sale Page</a>
                </div>
            </div>
            <div id="links">

            </div>
        </div>
    )
}

export default Navbar;
