import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import JobList from './pages/JobPortal/JobList';
import JobDetails from './pages/JobPortal/JobDetails';
import PrepHome from './pages/Preparation/PrepHome';
import SubjectView from './pages/Preparation/SubjectView';
import CompanyList from './pages/Hiring/CompanyList';
import CompanyDetails from './pages/Hiring/CompanyDetails';
import OracleTopicSheet from './pages/OracleSheet/TopicSheet';
import LandingPage from './pages/LandingPage';

function App() {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <div className="app-container">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/jobs" element={<JobList />} />
                        <Route path="/jobs/:id" element={<JobDetails />} />

                        <Route path="/preparation" element={<PrepHome />} />
                        <Route path="/preparation/:subject" element={<SubjectView />} />

                        <Route path="/hiring-process" element={<CompanyList />} />
                        <Route path="/hiring-process/:companyId" element={<CompanyDetails />} />

                        <Route path="/oracle-exadata-sheet" element={<OracleTopicSheet />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
