import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ORACLE_TOPICS = [
    {
        id: 'architecture',
        title: 'Exadata Architecture',
        content: [
            'Database Machine Overview: Quarter, Half, Full Rack',
            'Storage Server (Cells): High Performance vs Extreme Flash',
            'InfiniBand / RoCE Network Interconnect',
            'Compute Nodes (Database Servers)'
        ]
    },
    {
        id: 'features',
        title: 'Key Features',
        content: [
            'Smart Scan (Offloading SQL processing to storage)',
            'Storage Indexes (Avoiding unnecessary I/O)',
            'Hybrid Columnar Compression (HCC) for space saving',
            'I/O Resource Management (IORM) for prioritizing workloads'
        ]
    },
    {
        id: 'maintenance',
        title: 'Maintenance & Patching',
        content: [
            'Patching using patchmgr (Rolling vs Non-Rolling)',
            'Replacing failed disks (CellCLI)',
            'Upgrading Image versions',
            'Health checks using Exachk'
        ]
    },
    {
        id: 'commands',
        title: 'Essential Commands (CellCLI / DCLI)',
        content: [
            'LIST CELL DETAIL',
            'LIST PHYSICALDIKS',
            'LIST LUN',
            'CREATE CELLDISK / GRIDDISK',
            'dcli -g cell_group -l root "command"'
        ]
    }
];

const TopicSheet = () => {
    const [activeTopic, setActiveTopic] = useState(ORACLE_TOPICS[0].id);

    return (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Link to="/preparation" style={{ display: 'block', marginBottom: '1rem', color: '#2563eb' }}>&larr; Back to Prep</Link>
                <div className="card" style={{ padding: '0' }}>
                    <h3 style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', margin: 0 }}>Topics</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {ORACLE_TOPICS.map(topic => (
                            <li key={topic.id}>
                                <button
                                    onClick={() => setActiveTopic(topic.id)}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '0.75rem 1rem',
                                        background: activeTopic === topic.id ? '#eff6ff' : 'transparent',
                                        color: activeTopic === topic.id ? '#2563eb' : '#334155',
                                        fontWeight: activeTopic === topic.id ? '600' : '400',
                                        borderLeft: activeTopic === topic.id ? '4px solid #2563eb' : '4px solid transparent'
                                    }}
                                >
                                    {topic.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={{ flex: 1 }}>
                {ORACLE_TOPICS.map(topic => (
                    activeTopic === topic.id && (
                        <div key={topic.id} className="card">
                            <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                {topic.title}
                            </h2>
                            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {topic.content.map((item, index) => (
                                    <li key={index} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: '#fffbeb', borderRadius: '4px', border: '1px solid #fcd34d' }}>
                                <strong>Tip:</strong> Always run exachk before and after maintenance activities!
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default TopicSheet;
