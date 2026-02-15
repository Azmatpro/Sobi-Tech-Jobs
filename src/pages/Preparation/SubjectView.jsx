import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MOCK_DATA = {
    aptitude: [
        { id: 1, question: 'If a car travels 60km in 1 hour, what is its speed?', answer: '60 km/h' },
        { id: 2, question: 'What is 15% of 200?', answer: '30' },
    ],
    technical: [
        { id: 1, question: 'Explain the difference between TCP and UDP.', answer: 'TCP is connection-oriented, reliable. UDP is connectionless, faster but unreliable.' },
        { id: 2, question: 'What is the Virtual DOM in React?', answer: 'A lightweight copy of the real DOM used for performance optimization.' },
    ],
    hr: [
        { id: 1, question: 'Tell me about yourself.', answer: 'Focus on professional background and key achievements.' },
        { id: 2, question: 'Why do you want to join this company?', answer: 'Align your goals with the company mission.' },
    ]
};

const SubjectView = () => {
    const { subject } = useParams();
    const data = MOCK_DATA[subject] || [];
    const title = subject.charAt(0).toUpperCase() + subject.slice(1);

    return (
        <div>
            <Link to="/preparation" style={{ marginBottom: '1rem', display: 'inline-block', color: '#2563eb' }}>&larr; Back to Dashboard</Link>
            <h1 style={{ marginBottom: '2rem' }}>{title} Preparation</h1>

            {data.length === 0 ? (
                <p>No content available for this section yet.</p>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {data.map((item) => (
                        <div key={item.id} className="card">
                            <h4 style={{ marginBottom: '0.5rem' }}>Q: {item.question}</h4>
                            <details>
                                <summary style={{ cursor: 'pointer', color: '#64748b' }}>Show Answer</summary>
                                <p style={{ marginTop: '1rem', padding: '1rem', background: '#f1f5f9', borderRadius: '4px' }}>
                                    {item.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SubjectView;
