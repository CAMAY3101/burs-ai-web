import React from 'react'

import logo from '../Assets/icons/burs-icon.png'
import invesment_icon from '../Assets/icons/invesment.png'
import prestamo_icon from '../Assets/icons/prestamo.png'
import '../Styles/Common.scss'

import { IconChevronDown } from '@douyinfe/semi-icons';
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { Space } from '@douyinfe/semi-ui';

// make a string of the class names you want to apply to put in the className attribute
const FontnavButtonClass = "rubik-Bold-18";

const Navbar = () => {
    return (
    <Nav className="navbar">
        <NavbarBrand justify='start'>
            <Link href="/">
                <img src={logo} alt="BURSAI" className="brand-logo" />
            </Link>
        </NavbarBrand>

        <NavbarContent className="gap-x-20" justify='start' >
            <NavbarItem className='nav-button'>
                <Link className={FontnavButtonClass} href="">
                    Solicita Prestamo
                </Link>
            </NavbarItem>
            <NavbarItem className='nav-button'>
                <Link className={FontnavButtonClass} href="/quiero-invertir">
                    Quiero Invertir
                </Link>
            </NavbarItem>
        </NavbarContent>
    </Nav>
  )
}

export default Navbar