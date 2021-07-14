import React from 'react'
import {  SidebarContainer, Icon,CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to='blog' onClick={toggle}>Blog</SidebarLink>
                    <SidebarLink to='servicios' onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to='cursos' onClick={toggle}>Cursos</SidebarLink>
                    <SidebarLink to='nosotros' onClick={toggle}>Nosotros</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/doc">Documentación</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
       
    )
}

export default Sidebar
