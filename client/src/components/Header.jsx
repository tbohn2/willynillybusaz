import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/App.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const closeMenu = () => {
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        document.body.addEventListener("click", closeMenu);

        return () => {
            document.body.removeEventListener("click", closeMenu);
        };
    }, [menuOpen]);

    const handleMenuContainerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <header className="annapurna-sil-bold d-flex justify-content-evenly align-items-center">
            <h1 className="">WILLY NILLY BUS AZ</h1>
            <div className="menu-container d-flex justify-content-center align-items-center" onClick={handleMenuContainerClick}>
                <button type="button" className="menu-icon text-center" onClick={handleMenuClick}>&#9776;</button>
                <ul className={menuOpen ? 'menu display-block' : 'hidden'}>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;