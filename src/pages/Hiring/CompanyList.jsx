import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const COMPANIES = [
    { id: 'tcs', name: 'TCS', role: 'Ninja / Digital', logo: '🏢' },
    { id: 'infosys', name: 'Infosys', role: 'System Engineer', logo: '🏢' },
    { id: 'wipro', name: 'Wipro', role: 'Project Engineer', logo: '🏢' },
    { id: 'accenture', name: 'Accenture', role: 'ASE / FSE', logo: '🏢' },
    { id: 'oracle', name: 'Oracle', role: 'Member Technical Staff', logo: '🏢' },
];

const CompanyList = () => {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Hiring Process & Syllabus</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {COMPANIES.map(company => (
                    <Link key={company.id} to={`/hiring-process/${company.id}`} className="card" style={{ textAlign: 'center', transition: 'transform 0.2s', display: 'block' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{company.logo}</div>
                        <h3 style={{ textDecoration: 'none', color: 'inherit' }}>{company.name}</h3>
                        <p style={{ color: '#64748b' }}>{company.role}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CompanyList;
