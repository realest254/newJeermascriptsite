import React, { useEffect, useRef, useState } from 'react';
import './TeamSection.css';
import peter from './../Utils/peterMaina.jpg';
import jerome from './../Utils/jerome.jpg';
import jermaine from './../Utils/cEo.jpg';
import grace from './../Utils/grace.jpg';

const TeamMember = ({ image, name, role }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div className="team-member reveal-item">
      {!imageLoaded && <div className="image-placeholder"></div>}
      <img
        ref={imgRef}
        src={image}
        alt={name}
        className={`team-member-image ${imageLoaded ? 'loaded' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const revealItems = sectionRef.current.querySelectorAll('.reveal-item');
    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { image: jermaine, name: "Jermaine Kariuki", role: "CEO, Director" },
    { image: peter, name: "Peter Maina", role: "Lead Developer" },
    { image: grace, name: "Grace Wambui", role: "Digital Strategist" },
    { image: jerome, name: "Jerome Mukinda", role: "CTO" }
  ];

  return (
    <section className="team-section" ref={sectionRef}>
      <h1 className="reveal-item">Our Dedicated Team</h1>
      <p className="team-description reveal-item">
        Meet the talented individuals who drive our success. Our team consists of creative
        designers, skilled developers, and strategic thinkers committed to delivering
        exceptional digital experiences.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;