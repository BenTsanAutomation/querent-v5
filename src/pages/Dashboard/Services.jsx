import { Bot, Cpu, Network, Pause, Play, Settings } from 'lucide-react';

const Services = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1>Active AI Services</h1>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>+ Deploy New Agent</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>

                {/* Service Card 1 */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(123, 44, 191, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Inbound Support Agent</h3>
                                <span style={{ fontSize: '0.8rem', color: '#00f5d4', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: '#00f5d4', borderRadius: '50%', display: 'inline-block' }}></span>
                                    Healthy
                                </span>
                            </div>
                        </div>
                        <button style={{ color: 'var(--text-muted)' }}><Settings size={18} /></button>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                        Handles tier-1 support calls and routes complex issues to human agents. Includes sentiment analysis.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                        <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}><Pause size={16} /> Pause</button>
                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>View Logs</button>
                    </div>
                </div>

                {/* Service Card 2 */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(123, 44, 191, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
                                <Network size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>CRM Lead Sync Workflow</h3>
                                <span style={{ fontSize: '0.8rem', color: '#00f5d4', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: '#00f5d4', borderRadius: '50%', display: 'inline-block' }}></span>
                                    Healthy
                                </span>
                            </div>
                        </div>
                        <button style={{ color: 'var(--text-muted)' }}><Settings size={18} /></button>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                        Extracts data from incoming emails, categorizes leads via LLM, and inserts directly into Salesforce.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                        <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}><Pause size={16} /> Pause</button>
                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>View Logs</button>
                    </div>
                </div>

                {/* Service Card 3 */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Product Knowledge Base LLM</h3>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%', display: 'inline-block' }}></span>
                                    Paused
                                </span>
                            </div>
                        </div>
                        <button style={{ color: 'var(--text-muted)' }}><Settings size={18} /></button>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                        Internal Q&A system for employees trained on all product wikis and technical documentation.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                        <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem' }}><Play size={16} /> Resume</button>
                        <button className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>View Logs</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
