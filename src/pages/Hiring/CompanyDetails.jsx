import React from 'react';
import { useParams, Link } from 'react-router-dom';

const COMPANY_DATA = {
    tcs: {
        name: 'TCS',
        pattern: [
            { section: 'Numerical Ability', time: '40 mins', questions: 26 },
            { section: 'Verbal Ability', time: '30 mins', questions: 24 },
            { section: 'Reasoning Ability', time: '50 mins', questions: 30 },
            { section: 'Programming Logic', time: '15 mins', questions: 10 },
            { section: 'Coding', time: '45 mins', questions: 2 },
        ],
        eligibility: '60% throughout academics, no active backlogs.'
    },
    infosys: {
        name: 'Infosys',
        pattern: [
            { section: 'Reasoning Ability', time: '25 mins', questions: 15 },
            { section: 'Mathematical Ability', time: '35 mins', questions: 10 },
            { section: 'Verbal Ability', time: '20 mins', questions: 20 },
            { section: 'Pseudocode (Technical)', time: '10 mins', questions: 5 },
            { section: 'Puzzle Solving', time: '10 mins', questions: 4 },
        ],
        eligibility: '60% or 6 CGPA in 10th, 12th, and Graduation.'
    }
};

const CompanyDetails = () => {
    const { companyId } = useParams();
    const data = COMPANY_DATA[companyId];

    if (!data) {
        return (
            <div className="card">
                <Link to="/hiring-process">&larr; Back</Link>
                <h2>Company data coming soon...</h2>
            </div>
        );
    }

    return (
        <div>
            <Link to="/hiring-process" style={{ display: 'inline-block', marginBottom: '1rem', color: '#2563eb' }}>&larr; Back to Companies</Link>
            <div className="card">
                <h1 style={{ marginBottom: '1rem' }}>{data.name} Hiring Process</h1>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Eligibility Criteria</h3>
                    <p>{data.eligibility}</p>
                </div>

                <h3>Exam Pattern</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                        <tr style={{ background: '#f1f5f9' }}>
                            <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Section</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Time</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.pattern.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '0.75rem' }}>{row.section}</td>
                                <td style={{ padding: '0.75rem' }}>{row.time}</td>
                                <td style={{ padding: '0.75rem' }}>{row.questions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyDetails;
