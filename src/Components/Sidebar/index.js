import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='About' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='Experience' onClick={toggle}>Experience</SidebarLink>
                    <SidebarLink to='Projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
