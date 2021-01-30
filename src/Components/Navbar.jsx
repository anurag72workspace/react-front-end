import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container nav-container navbar-light bg-light">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                       <NavLink className="navbar-brand" to="/home" >ReactJS </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/product">Product </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/pricing">Pricing </NavLink>
                                </li>
                                    
                                <li className="nav-item">
                                        <NavLink className="nav-link active" to="/Solution">Solution</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/customer" tabindex="-1" aria-disabled="true">Customers</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/resouce" tabindex="-1" aria-disabled="true">Resources</NavLink>
                                    </li>
                                    </ul>                
       
       <Button>
     <LockIcon className="lock" />
        <NavLink className="login nav-link active" to="/login" tabindex="-1" aria-disabled="true">Login</NavLink>
        <ArrowForwardIosIcon className="arrow" />
       </Button>     
        <Button style={{backgroundColor : "orange"}}> <span>Schedule Demo <ArrowForwardIosIcon className="arrow1" /></span></Button>
    </div>
                        </div>
</nav>
            </div>
        

        </>
    );
};

export default Navbar;