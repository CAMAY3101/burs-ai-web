import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import logo from '../../Assets/icons/burs-color-icon.png'

import {useAuthContext} from '../../Contexts/authContext'

function NavbarLoan() {
    const { logout } = useAuthContext()

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
    }

    return (
        <Navbar className="shadow-[#F3F0FF_0px_3px_10px] h-[70px] mb-16">
            <NavbarBrand>
                <Link href="/">
                    <img src={logo} alt="BURSAI" className="w-[60px] h-[60px]" />
                </Link>
            </NavbarBrand>
            
            <NavbarItem className="" >
                <Link className="font-rubik font-medium text-dark-blue-400 text-sm" onClick={handleLogout}>
                    Cerrar Sesión
                </Link>
            </NavbarItem>
        </Navbar>
    )
}

export default NavbarLoan