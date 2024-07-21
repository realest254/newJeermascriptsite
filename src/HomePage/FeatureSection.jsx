import React from 'react';
import './FeatureSection.css';
import featureImg from './../Utils/featureImg.jpg';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <h3>Why Choose Us</h3>
        <h2>Are you looking for a website that not only looks fantastic but also functions seamlessly? Here's why we are your best choice.</h2>
        <ul className="features-list">
          <li>
            <div>
              <h4><span className="icon">🔧</span>Custom Solutions</h4>
              <p>Tailored web development solutions to meet your specific business needs and objectives.</p>
            </div>
          </li>
          <li>
            <div>
              <h4><span className="icon">📱</span>Responsive Design</h4>
              <p>Build responsive, mobile-first websites that provide seamless experiences across all devices.</p>
            </div>
          </li>
          <li>
            <div>
              <h4><span className="icon">🔍</span>SEO Optimization</h4>
              <p>Optimize your website for search engines to improve visibility and drive organic traffic.</p>
            </div>
          </li>
          <li>
            <div>
              <h4><span className="icon">🛠️</span>Dedicated Support</h4>
              <p>Receive continuous support and maintenance to ensure your website runs smoothly.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="features-image">
        <img src={featureImg} alt="Code on laptop screen" />
      </div>
    </section>
  );
};

export default FeaturesSection;