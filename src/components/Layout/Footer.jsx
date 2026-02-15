import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#1e293b',
            color: 'white',
            padding: '2rem',
            marginTop: 'auto',
            textAlign: 'center'
        }}>
            <p>&copy; {new Date().getFullYear()} Sobi Tech Jobs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
