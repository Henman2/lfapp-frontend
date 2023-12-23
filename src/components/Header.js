import React, { useState } from 'react';
import logo from '../app/assets/Images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar className='App-header tc justify-content-center align-items-center pv3 ph3' dark expand='md' container>
            <NavbarBrand className='me-5' href="/"><img className='mr3' src={logo} style={{height:40, width:40}} alt='logo'/>Lost and Found App</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto f6 fw6" navbar>
                    <NavItem>
                    <NavLink className='nav-link link' to='/'><i className='fa fa-home'/> Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link link' to='/directory'><i className='fa fa-list'/> Item List</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link link' to='/posting'><i className='fa fa-home'/> Post Item</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link link' to='/about'><i className='fa fa-info'/> About</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link link' to='/contact'><i className='fa fa-address-card'/> Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}
export default Header;