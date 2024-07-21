import React, { useState, useEffect } from 'react';
import './PortfolioShow.css';
import cardealership from './../Utils/cardealershipdesign.jpg';
import massage from './../Utils/massage.jpg';
import clinic from './../Utils/clinicdesign.jpg';
import realestate from './../Utils/realestate.jpg';

const ProjectCard = ({ title, category, imageUrl, projectUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a href={projectUrl} className="project-card">
      <div className='imagecard'>
        {!imageLoaded && <div className="image-placeholder" />}
        <img 
          src={imageUrl} 
          alt={title} 
          className={`project-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="card-details">
          <h3 className="project-title">{title}</h3>
          <p className="project-category">{category}</p>
        </div>
      </div>
    </a>
  );
};

const ProjectGrid = ({ projects }) => (
  <div className="project-grid">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

const PortfolioShow = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API call or data fetching
    setTimeout(() => {
      setProjects([
        {
          title: 'Massage',
          category: 'Massage',
          imageUrl: massage,
          projectUrl: 'https://realest254.github.io/feliz-massage-spot/'
        },
        {
          title: 'Clinic Website',
          category: 'Health',
          imageUrl: clinic,
          projectUrl: 'https://synergos.dora.run/'
        },
        {
          title: 'Real estate website',
          category: 'Realtor',
          imageUrl: realestate,
          projectUrl: 'https://luxeestate.dora.run/'
        },
        {
          title: 'car dealership website',
          category: 'Dealership',
          imageUrl: cardealership,
          projectUrl: 'https://rangerland.dora.run/'
        }
      ]);
    }, 100); // Small delay to simulate data fetching
  }, []);

  return (
    <div className="portfolioShow">
      <h2 className="section-title">Web Development</h2>
      <ProjectGrid projects={projects} />
      <div className="achievements">
        <h2>Our Achievements</h2>
        <div className="achievement-stats">
          <div className="stat">
            <span className="stat-number">150+</span>
            <span className="stat-label">Satisfied Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Completed Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShow;