import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-watermark" aria-hidden="true">Querent</div>
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <img src="/favicon.png" alt="Querent Logo" className="logo-icon image-logo" style={{ width: '28px', height: '28px' }} />
                        <span className="logo-text">Quer<span className="text-gradient">ent</span></span>
                    </Link>
                    <p className="footer-desc">
                        Production AI agents, workflow automation, and custom models. Designed, built, and operated by Querent.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" className="social-link"><Github size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div>
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/ai-consulting">AI Workflow Consulting</Link></li>
                            <li><Link to="/services/voice-agents">Voice Agents</Link></li>
                            <li><Link to="/services/process-automation">Process Automation</Link></li>
                            <li><Link to="/services/custom-models">Custom Agents</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/dashboard">Client Portal</Link></li>
                            <li><Link to="/booking">Contact</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Querent. All rights reserved.</p>
                <div className="footer-legal">
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
