import { ArrowRight, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero animate-fade-in">
                <div className="container">
                    <div className="about-header text-center">
                        <h1 className="hero-title">Who We <span className="text-gradient">Are</span></h1>
                        <p className="hero-subtitle mx-auto">
                            Querent is an AI consulting firm dedicated to supporting manual, repetitive tasks with intelligent, scalable digital operations and workflows.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section about-philosophy">
                <div className="container">
                    <h2 className="section-title text-center">The Philosophy</h2>
                    <div className="mission-grid">
                        <div className="mission-content glass-panel">
                            <div className="icon-wrapper"><Target size={32} /></div>
                            <h2>Our Mission</h2>
                            <p>
                                We build voice agents that hold sub-second conversations, pipelines that connect CRMs and databases without human handoff, and fine-tuned models trained on your proprietary data. Every deployment ships with monitoring, versioning, and a clear rollback path.
                            </p>
                        </div>
                        <div className="mission-content glass-panel">
                            <div className="icon-wrapper"><Rocket size={32} /></div>
                            <h2>Our Approach</h2>
                            <p>
                                Engagements start with a workflow audit: we map your friction-heavy processes, quantify the time and cost they consume, and scope the AI integrations that clear them. From audit to production is typically four to eight weeks, with weekly demos and direct access to the engineer building your system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2 className="section-title">Ready to build the future?</h2>
                    <Link to="/booking" className="btn btn-primary btn-lg mt-4">
                        Speak with our architects <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
