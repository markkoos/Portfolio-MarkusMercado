import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './NavBar';

export default function Container() {

    // use state for the current page 
    const [currentPage, setPage] = useState('About Me');

    // checks the current value of currentPage and returns the matching component to be rendered
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Contact Me') {
            return <ContactMe />
        }
    };

    // handler function that sets the value of currentPage to what is selected
    const pageChangeHandler = (page) => {
        setPage(page);
    };

    return (
        <div>
            <NavBar pageChangeHandler={pageChangeHandler} />
            {renderPage()}
        </div>
    )
}
