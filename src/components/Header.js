import React from 'react';
import {NavLink} from "react-router-dom";

    const Header = ()=>(
    <div>
        <header>
            <h1>Expensify.</h1>
            <div>
                <h3>
                <span>
                    <NavLink to={'/'} activeClassName={'is-active'} exact={true}>Home  &nbsp;&nbsp; </NavLink>
                    <NavLink to={'/create'} activeClassName={'is-active'}>Add Expense   &nbsp;&nbsp;</NavLink>
                    <NavLink to={'/help'} activeClassName={'is-active'}>Help</NavLink>

                </span>
                </h3>
            </div>
        </header>
         <hr />
        </div>
    );

    export default Header;
