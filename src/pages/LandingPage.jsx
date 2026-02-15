import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Master Your Career Journey with Sobi Tech Jobs</h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
                One platform for Job Hunting, Preparation, and Interview Success.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div className="card">
                    <h3>Find Jobs</h3>
                    <p style={{ margin: '1rem 0' }}>Browse correct openings from top companies.</p>
                    <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
                </div>

                <div className="card">
                    <h3>Prepare</h3>
                    <p style={{ margin: '1rem 0' }}>Aptitude, Technical, and HR materials.</p>
                    <Link to="/preparation" className="btn btn-primary">Start Learning</Link>
                </div>

                <div className="card">
                    <h3>Oracle Exadata</h3>
                    <p style={{ margin: '1rem 0' }}>Dedicated topic-wise sheet for Administrator role.</p>
                    <Link to="/oracle-exadata-sheet" className="btn btn-primary">View Sheet</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
