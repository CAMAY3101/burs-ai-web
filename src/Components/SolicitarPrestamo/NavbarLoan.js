import React from 'react'
import { Navbar, NavbarBrand, NavbarItem, Link } from '@nextui-org/react'
import logo from '../../Assets/icons/burs-color-icon.png'

import { useAuthContext } from '../../Contexts/authContext'

function NavbarLoan() {
    const { logout } = useAuthContext()

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
    }

    return (
        <Navbar className="shadow-[#F3F0FF_0px_3px_10px] h-[70px] mb-16">
            <NavbarBrand className="flex-shrink-0">
                <Link href="/">
                    <img src={logo} alt="BURSAI" className="max-w-[30px] sm:max-w-[40px] md:max-w-[50px] h-auto" />
                </Link>
            </NavbarBrand>
            <div className="flex lg:justify-end justify-end w-full">
                <NavbarItem className="text-right" >
                    <Link className="font-rubik font-medium text-dark-blue-400 text-sm" onClick={handleLogout}>
                        Cerrar Sesión
                    </Link>
                </NavbarItem>
            </div>
        </Navbar>
    )
}

export default NavbarLoan