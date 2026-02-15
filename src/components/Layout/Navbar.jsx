import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar" style={{
            background: 'var(--card-bg)',
            padding: '1rem 2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                <Link to="/">Sobi Tech Jobs</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0 }}>
                    <li><Link to="/jobs" style={{ fontWeight: 500 }}>Jobs</Link></li>
                    <li><Link to="/preparation" style={{ fontWeight: 500 }}>Preparation</Link></li>
                    <li><Link to="/hiring-process" style={{ fontWeight: 500 }}>Hiring Process</Link></li>
                    <li><Link to="/oracle-exadata-sheet" style={{ fontWeight: 500, color: '#f59e0b' }}>Oracle Exadata</Link></li>
                </ul>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--border-color)',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)'
                    }}
                    title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
