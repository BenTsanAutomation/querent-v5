import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Dashboard', path: '/dashboard' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'glass-nav scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/favicon.png" alt="Querent Logo" className="logo-icon image-logo" style={{ width: '28px', height: '28px' }} />
                    <span className="logo-text">Quer<span className="text-gradient">ent</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/booking" className="btn btn-primary nav-btn">
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="mobile-menu glass-panel">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/booking"
                        className="btn btn-primary btn-mobile"
                        onClick={() => setIsOpen(false)}
                    >
                        Book a Call
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
