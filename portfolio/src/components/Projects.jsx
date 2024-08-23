import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import databaseimg from '../assets/img/database.png';
import hangmanimg from '../assets/img/Hangman.png';
import jobfinderimg from '../assets/img/jobfinder.png';
import movieimg from '../assets/img/Movie.png';
import rockpaperimg from '../assets/img/RockPaper.png';
import virtualmouseimg from '../assets/img/virtualMouse.png';
import wellnesswiseimg from '../assets/img/wellnesswise.png';

const projects = [
  {
    title: "Database Website For Freelance Office in SQl",
    description: "Built a web platform for managing freelance tasks, clients, and finances using SQL for database management.",
    image: databaseimg,
  },
  {
    title: "Virtual Mouse Control Using Hand Gestures",
    description: "Created a virtual mouse controlled by hand gestures using Python and MATLAB for computer vision and interaction.",
    image: virtualmouseimg,
  },
  {
    title: "Movie Website",
    description: "Developed a dynamic movie database website using React and Redux Toolkit, featuring search and filtering capabilities.",
    image: movieimg,
  },
  {
    title: "Wellness Wise and Fitness",
    description: "Designed a wellness platform using React, Node.js, MongoDB, and Express.js, offering personalized fitness plans and tracking.",
    image: wellnesswiseimg,
  },
  {
    title: "Job Finder",
    description: "Built a job portal using React, Node.js, MongoDB, and Express.js, featuring job listings, applications, and user profiles.",
    image: jobfinderimg,
  },
  {
    title: "Hangman Game",
    description: "Developed a classic Hangman game in Python with word guessing and scoring features.",
    image: hangmanimg,
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "Created a Rock-paper-scissors game in Python with a simple, interactive user interface.",
    image: rockpaperimg,
  },
];

const Projects = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div className="my-auto">
        <h2 className="mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4 project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} className='project-image' />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
