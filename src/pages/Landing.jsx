import { ArrowRight, MessageSquare, AudioLines, BarChart3, Sparkles, Layers, Bot, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            {/* Hero */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content text-center animate-fade-in">
                        <h1 className="hero-title">
                            Unleash human <br />
                            potential <br />
                            <span className="text-gradient">with AI automation</span>
                        </h1>
                        <p className="hero-subtitle mx-auto">
                            Querent engineers custom AI infrastructure that handles the repetitive, so your team can focus on what truly matters.
                        </p>
                        <div className="hero-cta">
                            <Link to="/booking" className="btn btn-secondary btn-lg">
                                Book a demo
                            </Link>
                            <Link to="/about" className="btn btn-primary btn-lg">
                                Get Started <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Background glows */}
                <div className="hero-bg-glow glow-1"></div>
                <div className="hero-bg-glow glow-2"></div>
            </section>

            {/* Feature row 1 — context + voice */}
            <section className="section features-section">
                <div className="container">
                    <div className="features-grid features-grid-2">
                        <div className="feature-card glass-panel animate-fade-in delay-100">
                            <div className="feature-card-text">
                                <h3>Instant context before every rollout</h3>
                                <p>Querent automates calls and ingestion of CRMs, sales enablement, and project ops, so you never spend half a day catching up on the latest deal.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-chat">
                                <div className="chat-bubble chat-bubble-them">
                                    <span className="chat-name">Tony</span>
                                    <span>I reviewed the file. The targets are up 12% and we should accelerate Q2 outreach.</span>
                                </div>
                                <div className="chat-meta">automated CRM sync</div>
                            </div>
                        </div>

                        <div className="feature-card glass-panel animate-fade-in delay-200">
                            <div className="feature-card-text">
                                <h3>Next-gen Voice Agents</h3>
                                <p>Deploy hyper-realistic, voice-of-genuine, multilingual voice agents that handle inbound, outbound, and quality QA the same way your best operator would.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-voice">
                                <AudioLines size={120} className="voice-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature row 2 — visibility + learn */}
            <section className="section features-section features-section-tight">
                <div className="container">
                    <div className="features-grid features-grid-2">
                        <div className="feature-card glass-panel animate-fade-in delay-100">
                            <div className="feature-card-text">
                                <h3>Clearer visibility &amp; insights</h3>
                                <p>Automatically synthesize meeting notes, customer documents, and lengthy CRM patterns into actionable summaries before your big meetings.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-chart">
                                <div className="mini-card">
                                    <div className="mini-card-header">
                                        <BarChart3 size={16} /> Acme Case Report
                                    </div>
                                    <div className="mini-bars">
                                        <div className="mini-bar" style={{ width: '85%' }}></div>
                                        <div className="mini-bar" style={{ width: '60%' }}></div>
                                        <div className="mini-bar mini-bar-accent" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card glass-panel animate-fade-in delay-200">
                            <div className="feature-card-text">
                                <h3>Learn from what works</h3>
                                <p>Querent leans behavioral insights, hidden research, and thousands of hours of historical operations and data, so it brings.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-learn">
                                <Sparkles size={96} className="learn-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature row 3 — platform + autonomous */}
            <section className="section features-section features-section-tight">
                <div className="container">
                    <div className="features-grid features-grid-2">
                        <div className="feature-card glass-panel animate-fade-in delay-100">
                            <div className="feature-card-text">
                                <h3>Works in any platform</h3>
                                <p>Plug Querent into the tools you already use — Slack, Notion, Salesforce, HubSpot, Linear, and more. No migration, no rip-and-replace.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-platforms">
                                <div className="platform-pill">Slack</div>
                                <div className="platform-pill">Notion</div>
                                <div className="platform-pill">HubSpot</div>
                            </div>
                        </div>

                        <div className="feature-card glass-panel feature-card-accent animate-fade-in delay-200">
                            <div className="feature-card-text">
                                <h3>Autonomous execution</h3>
                                <p>Agents take action across your stack — drafting emails, updating records, scheduling follow-ups — under guardrails you define.</p>
                            </div>
                            <div className="feature-card-visual feature-visual-auto">
                                <Bot size={96} className="auto-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy strip */}
            <section className="section privacy-section">
                <div className="container">
                    <div className="privacy-strip">
                        <div className="privacy-icon"><Lock size={28} /></div>
                        <div>
                            <h3>Privately by design.</h3>
                            <p>No shadow tasks, no hidden training. Your data is always encrypted and never leaves your control.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass-panel">
                        <div className="cta-box-content">
                            <h2>Try Querent today</h2>
                            <p>Begin your transformation. Speak with our lead architects today to map out your custom pipeline.</p>
                            <Link to="/booking" className="btn btn-primary btn-lg">
                                Book a demo <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="cta-box-visual">
                            <div className="cta-orb"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
