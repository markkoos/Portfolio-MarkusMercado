import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function container() {

    // use state for the current page 
    const [currentPage, setPage] = useState('Home');

    // checks the current value of currentPage and returns the matching component to be rendered
    const renderPage = () => {
        if (currentpage === 'About Me') {
            return <AboutMe />
        }
        if (currentpage === 'Projects') {
            return <Projects />
        }
        if (currentpage === 'Resume') {
            return <Resume />
        }
        if (currentpage === 'Contact Me') {
            return <ContactMe />
        }
    };

    // handler function that sets the value of currentPage to what is selected
    const pageChangeHandler = (page) => {
        setPage(page);
    };

}