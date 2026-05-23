import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
    return (
        <div className="coming-soon-page section">
            <div className="container">
                <div className="coming-soon-content text-center animate-fade-in">
                    <div className="coming-soon-badge">
                        <Sparkles size={16} />
                        <span>In development</span>
                    </div>
                    <h1 className="hero-title">
                        Coming <span className="text-gradient">soon.</span>
                    </h1>
                    <p className="hero-subtitle mx-auto">
                        The Querent client portal is under construction. While we put the finishing touches on it, book a call and we'll get you set up directly.
                    </p>
                    <div className="coming-soon-cta">
                        <Link to="/booking" className="btn btn-primary btn-lg">
                            Book a call <ArrowRight size={18} />
                        </Link>
                        <Link to="/" className="btn btn-secondary btn-lg">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
            <div className="coming-soon-glow"></div>
        </div>
    );
};

export default ComingSoon;
