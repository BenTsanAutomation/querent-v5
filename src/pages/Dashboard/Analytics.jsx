import { BarChart3, TrendingUp, Users } from 'lucide-react';

const Analytics = () => {
    return (
        <div>
            <h1 className="mb-6">Analytics & Insights</h1>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div className="card-header">
                    <h3 className="card-title">Token Usage Over Time</h3>
                    <select style={{ width: 'auto', background: 'transparent', padding: '0.4rem 1rem', border: '1px solid var(--glass-border)' }}>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Quarter</option>
                    </select>
                </div>

                {/* Placeholder for a chart */}
                <div style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '2%', padding: '1rem 0' }}>
                    {[30, 45, 60, 40, 75, 50, 90].map((h, i) => (
                        <div key={i} style={{
                            flex: 1,
                            background: 'linear-gradient(to top, var(--accent-primary), rgba(0,245,212,0.8))',
                            height: `${h}%`,
                            borderRadius: '4px 4px 0 0',
                            opacity: 0.8,
                            transition: 'all 0.3s'
                        }} className="chart-bar" title={`Day ${i + 1}: ${h * 1000} tokens`}></div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '0.5rem 2%' }}>
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="card">
                    <div className="card-header"><h3 className="card-title">ROI Metrics</h3></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(123, 44, 191, 0.2)', borderRadius: '8px' }}><TrendingUp color="var(--accent-secondary)" /></div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Estimated Hours Saved</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 600 }}>452 hrs</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(123, 44, 191, 0.2)', borderRadius: '8px' }}><Users color="var(--accent-secondary)" /></div>
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Lead Conversion Rate</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 600 }}>14.2% <span style={{ color: '#00f5d4', fontSize: '0.9rem' }}>+2.1%</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header"><h3 className="card-title">Top Performing Intents</h3></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Sales Inquiry</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>45%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Support/Ticketing</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>32%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Meeting Scheduling</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>15%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Other</span>
                            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>8%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
