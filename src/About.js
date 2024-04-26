import React from 'react';
import { useState, useEffect } from 'react'
import About from './components/about'; 
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import AboutSection from './components/sections/about';
import ResumeSection from './components/sections/resume';

function AboutPage() {

    const [darkTheme, setDarkTheme] = useState(sessionStorage.getItem('darkTheme') === 'true');
    const [langue, setLangue] = useState(sessionStorage.getItem('langue'));
    const [identity, setIdentity] = useState(JSON.parse(sessionStorage.getItem('identity')));

    useEffect(() => {
        sessionStorage.setItem('darkTheme', darkTheme ? 'true' : 'false');
    }, [darkTheme]);

    useEffect(() => {
        sessionStorage.setItem('langue', langue);
    }, [langue]);

    useEffect(() => {
        sessionStorage.setItem('identity', JSON.stringify(identity));
    }, [identity]);

    return (<>
            <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} identity={identity}/>
            <About darkTheme={darkTheme}   langue={langue} />
            <FooterNavBar darkTheme={darkTheme} langue={langue} />
            </>
    );
}

export default AboutPage;