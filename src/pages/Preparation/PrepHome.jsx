import React from 'react';
import { Link } from 'react-router-dom';

const PrepHome = () => {
    const subjects = [
        { title: 'Aptitude', path: 'aptitude', description: 'Numerical and logical reasoning practice.', color: '#3b82f6' },
        { title: 'Technical', path: 'technical', description: 'Core CS concepts, Coding, and System Design.', color: '#10b981' },
        { title: 'HR Interview', path: 'hr', description: 'Common HR questions and behavioral interview tips.', color: '#8b5cf6' },
    ];

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Preparation Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {subjects.map(sub => (
                    <div key={sub.path} className="card" style={{ borderTop: `4px solid ${sub.color}` }}>
                        <h3>{sub.title}</h3>
                        <p style={{ margin: '1rem 0' }}>{sub.description}</p>
                        <Link to={`/preparation/${sub.path}`} className="btn btn-primary" style={{ display: 'inline-block' }}>
                            Start Practice
                        </Link>
                    </div>
                ))}

                <div className="card" style={{ borderTop: '4px solid #f59e0b', background: '#fffbeb' }}>
                    <h3>Oracle Exadata Admin</h3>
                    <p style={{ margin: '1rem 0' }}>Dedicated preparation sheet for Oracle Exadata Administrator role.</p>
                    <Link to="/oracle-exadata-sheet" className="btn btn-primary" style={{ background: '#d97706' }}>
                        Go to Sheet
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrepHome;
