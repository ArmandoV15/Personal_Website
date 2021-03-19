import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Armando V</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} to='About'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} to='Experience'>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} to='Projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} to='Contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
