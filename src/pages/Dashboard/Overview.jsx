import { Activity, PhoneCall, Zap, Clock } from 'lucide-react';

const Overview = () => {
    return (
        <div>
            <h1 className="mb-6">System Overview</h1>

            <div className="stat-grid">
                <div className="card stat-card">
                    <div className="text-muted flex items-center gap-2"><PhoneCall size={18} /> Active AI Calls</div>
                    <div className="value">142</div>
                    <div className="trend positive text-sm">↑ 12% vs last hour</div>
                </div>

                <div className="card stat-card">
                    <div className="text-muted flex items-center gap-2"><Zap size={18} /> Workflows Executed</div>
                    <div className="value">8,459</div>
                    <div className="trend positive text-sm">↑ 5% vs yesterday</div>
                </div>

                <div className="card stat-card">
                    <div className="text-muted flex items-center gap-2"><Clock size={18} /> Avg Latency</div>
                    <div className="value">340ms</div>
                    <div className="trend positive text-sm">↓ 15ms improvement</div>
                </div>

                <div className="card stat-card">
                    <div className="text-muted flex items-center gap-2"><Activity size={18} /> System Health</div>
                    <div className="value text-gradient">99.99%</div>
                    <div className="trend text-sm text-muted">All systems operational</div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Recent Activity Logs</h3>
                    </div>
                    <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { time: '10:42 AM', event: 'Inbound sales call assigned to Agent Alpha. Duration 4m 12s. Outcome: Meeting booked.' },
                            { time: '10:35 AM', event: 'Workflow Trigger: "New Lead CRM Sync" executed successfully. 4 records updated.' },
                            { time: '10:15 AM', event: 'Custom LLM re-indexed latest weekly reports.' },
                            { time: '09:58 AM', event: 'Outbound campaign "Q3 Reactivation" started. 500 queued.' }
                        ].map((log, i) => (
                            <div key={i} style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{log.time}</div>
                                <div style={{ fontSize: '0.95rem' }}>{log.event}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Service Usage vs Quota</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>Voice Minutes</span>
                                <span>4,120 / 10,000</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '41%', height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}></div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>LLM Tokens (Millions)</span>
                                <span>12.4 / 20.0</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}></div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>Workflow Executions</span>
                                <span>85,200 / 100,000</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '85%', height: '100%', background: '#ffca3a' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
