import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';

const Portfolio = () => {
    return(
<div id="page-top">
<Navbar />
<div className="container-fluid p-0">
 <About />
 <Experience />
 <Education />
 <Skills />
</div>

</div>
    );
};

export default Portfolio;