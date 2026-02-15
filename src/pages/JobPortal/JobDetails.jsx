import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();

    // In a real app, fetch job by ID
    return (
        <div className="card">
            <Link to="/jobs" style={{ display: 'inline-block', marginBottom: '1rem', color: '#2563eb' }}>&larr; Back to Jobs</Link>
            <h1>Job Details (ID: {id})</h1>
            <p style={{ margin: '1rem 0', color: '#64748b' }}>
                This is a placeholder for job details. In a real application, we would fetch the specific job data using the ID.
            </p>
            <div style={{ marginTop: '2rem' }}>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <h3 style={{ marginTop: '1.5rem' }}>Requirements</h3>
                <ul>
                    <li>Experience with React and Node.js</li>
                    <li>Knowledge of SQL and NoSQL databases</li>
                    <li>Strong problem-solving skills</li>
                </ul>

                <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;
