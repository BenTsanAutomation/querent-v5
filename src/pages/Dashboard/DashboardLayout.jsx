import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Bot, Settings, LogOut, ArrowLeft } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const navItems = [
        { name: 'Overview', path: '/dashboard', end: true, icon: <LayoutDashboard size={20} /> },
        { name: 'Analytics', path: '/dashboard/analytics', icon: <BarChart3 size={20} /> },
        { name: 'AI Services', path: '/dashboard/services', icon: <Bot size={20} /> },
    ];

    return (
        <div className="dashboard-layout">
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>Portal</h2>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    ))}

                    <div className="sidebar-divider"></div>

                    <NavLink to="/" className="sidebar-link text-muted">
                        <ArrowLeft size={20} />
                        <span>Back to Site</span>
                    </NavLink>
                    <button className="sidebar-link text-muted w-full text-left">
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </nav>
            </aside>

            <main className="dashboard-content">
                <header className="dashboard-header glass-panel">
                    <div className="user-info">
                        <div className="avatar">A</div>
                        <div>
                            <p className="user-name">Acme Corp</p>
                            <p className="user-role text-muted">Enterprise Tier</p>
                        </div>
                    </div>
                </header>
                <div className="dashboard-view animate-fade-in">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
