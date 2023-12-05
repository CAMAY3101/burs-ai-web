import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import logo from '../Assets/icons/burs-icon.png';
import '../Styles/Common.scss';


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Solicita Prestamo", "Quiero Invertir",];

    return (
        <Navbar className="bg-dark-blue-800 justify-between h-[70px]" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link href="/">
                        <img src={logo} alt="BURSAI" className="w-[60px] h-[60px]" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex sm:space-x-20" justify="start">
                <NavbarItem className="nav-button">
                    <Link className="rubik-Bold-18"  href="#">
                        Solicita Prestamo
                    </Link>
                </NavbarItem>
                <NavbarItem className="nav-button">
                    <Link className="rubik-Bold-18" href="/quiero-invertir">
                        Quiero Invertir
                    </Link>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    style={{ color: "white" }}
                />
            </NavbarContent>
            <NavbarMenu className="bg-dark-blue-800/50 pt-5 space-y-5">
                <NavbarMenuItem className="nav-button">
                    <Link className="w-full rubik-Bold-18" color='secondary' href="" size="lg">
                        Solicita Prestamo
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="nav-button">
                    <Link className="w-full rubik-Bold-18" color='secondary' size="lg" href="/quiero-invertir">
                        Quiero Invertir
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>

            

        </Navbar>
    );
}
