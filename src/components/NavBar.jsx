import React, { useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import PokemonLogo from '../images/pnglogo.webp';

const NavBar = ({ onLinkClick }) => {
    // Use useRef to create a reference to the header DOM element
    const headerRef = useRef(null);
    // Get the current path of the window location
    const currentPath = window.location.pathname;

    // Use useCallback to memoize the handleLinkClick function
    const handleLinkClick = useCallback(() => {
        // Check if onLinkClick is a function and call it
        if (typeof onLinkClick === 'function') {
            onLinkClick();
        }
    }, [onLinkClick]); // Dependency array ensures the function is only recreated if onLinkClick changes

    // useEffect hook to add a scroll event listener
    useEffect(() => {
        // Function to toggle the "sticky" class based on scroll position
        const handleScroll = () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0);
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        // Header element with role="navigation" for accessibility
        <header className='header' ref={headerRef} role="navigation">
            <div className='header-container'>
                <div className='landing-page-topbar-logo-section'>
                    {/* Use Link component for internal navigation */}
                    <Link to="/" className='logo' onClick={handleLinkClick}><img src={PokemonLogo} alt="Logo" /></Link>
                    <div className='links-to-pages'>
                        {/* Navigation links using Link component */}
                        <Link to="/Pokedex" onClick={handleLinkClick} className={currentPath === "/Pokedex/" ? "active-nav-menu-link" : ""}>Pokemons</Link>
                        <Link to="/Pokedex/about" onClick={handleLinkClick} className={currentPath === "/Pokedex/about" ? "active-nav-menu-link" : ""}>About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
