import React from 'react';

export default function NavBar({ pageChangeHandler }) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand">Markus Mercado</span>
            <ul className="navbar-nav">

                <li className="nav-item">
                <a href="#aboutme" onClick={() => pageChangeHandler('About Me')}>About Me</a>
                </li>

                <li className="nav-item">
                <a href="projects" onClick={() => pageChangeHandler('Projects')}>Projects</a>
                </li>

                <li className="nav-item">
                <a href="#Resume" onClick={() => pageChangeHandler('Resume')}>Resume</a>
                </li>
                
                <li className="nav-item">
                <a href="#contactme" onClick={() => pageChangeHandler('Contact Me')}>Contact Me</a>
                </li>

            </ul>
        </nav>
    )
}