import React from 'react'
import logo from '../Assets/icons/burs-icon.png'
import invesment_icon from '../Assets/icons/invesment.png'
import prestamo_icon from '../Assets/icons/prestamo.png'
import '../Styles/Landing.scss'

import { IconChevronDown } from '@douyinfe/semi-icons';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { Space } from '@douyinfe/semi-ui';

// make a string of the class names you want to apply to put in the className attribute
const FontnavButtonClass = "rubik-Bold-15";

const navbarLanding = () => {
    return (
        <Navbar className="navbar">
            <NavbarBrand justify = 'start'>
                <Link href="/">
                    <img  src={logo} alt="BURSAI" className="logo" />
                </Link>
            </NavbarBrand>

            <NavbarContent className="navButtons" justify='center' >
                <Space spacing={[40]}>
                    <NavbarItem className='navButton'>
                        <Link className={FontnavButtonClass} href="#proceso">
                            Proceso
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='navButton'>
                        <Link className={FontnavButtonClass} href="#recompensa">
                            Recompensa
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='navButton'>
                        <Link className={FontnavButtonClass} href="#blog">
                            Blog
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='navButton'>
                        <Link className={FontnavButtonClass} href="#faqs">
                            Preguntas Frecuentes
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='navButton'>
                        <Link className={FontnavButtonClass} href="#contacto">
                            Contacto
                        </Link>
                    </NavbarItem>
                </Space>
            </NavbarContent>

            <NavbarContent justify="end">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger className="servicesButtons">
                            <Button
                                disableRipple
                                className="servicesButtons data-[hover=true]:bg-transparent rubik-Bold-18 "
                                endContent={<IconChevronDown />}
                                radius="sm"
                                variant="light"
                            >
                            Servicios
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="Prestamo"
                            description="Obtenga un préstamo en minutos, sin papeleo y sin salir de casa."
                            startContent={<img src={prestamo_icon} alt="Prestamo" className="icon" />}
                        >
                            Solicita Prestamo
                        </DropdownItem>
                        <DropdownItem
                            key="Invertir"
                            description="Invierte tu dinero con nosotros y obtén rendimientos atractivos."
                            startContent={<img src={invesment_icon} alt="Invertir" className="icon" />}
                            href="/quiero-invertir"
                        >
                            Quiero Invertir
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
)
}

export default navbarLanding



