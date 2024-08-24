import React from 'react';
import NavigationBar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Interests from '../components/Interests';
import Projects from '../components/Projects';

const Portfolio = () => {
    return(
<div id="page-top">
<NavigationBar />
<div className="container-fluid p-0">
 <About />
 <Experience />
 <Education />
 <Skills />
 <Interests />
 <Projects />
</div>

</div>
    );
};

export default Portfolio;