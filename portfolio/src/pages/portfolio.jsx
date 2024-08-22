import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';

const Portfolio = () => {
    return(
<div id="page-top">
<Navbar />
<div className="container-fluid p-0">
 <About />
 <Experience />
</div>

</div>
    );
};

export default Portfolio;