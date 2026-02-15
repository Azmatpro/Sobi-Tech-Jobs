import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_JOBS = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', type: 'Full-time' },
    { id: 2, title: 'Oracle DBA', company: 'DataSystems', location: 'Austin, TX', type: 'Contract' },
    { id: 3, title: 'Frontend Developer', company: 'Creative Solutions', location: 'Remote', type: 'Full-time' },
    { id: 4, title: 'HR Manager', company: 'PeopleFirst', location: 'New York, NY', type: 'Full-time' },
];

const JobList = () => {
    const [jobs] = useState(MOCK_JOBS);

    return (
        <div>
            <h2 style={{ marginBottom: '2rem' }}>Latest Job Openings</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {jobs.map(job => (
                    <div key={job.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
                            <p style={{ color: '#64748b' }}>{job.company} • {job.location}</p>
                            <span style={{
                                display: 'inline-block',
                                background: '#e0f2fe',
                                color: '#0369a1',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.875rem',
                                marginTop: '0.5rem'
                            }}>
                                {job.type}
                            </span>
                        </div>
                        <Link to={`/jobs/${job.id}`} className="btn btn-primary">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
