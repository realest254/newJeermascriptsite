import React, { useState, useEffect } from 'react';
import './BlogSection.css';
import blog1 from './../Utils/blog1Img.jpg';
import blog2 from './../Utils/blog2Img.jpg';
import blog3 from './../Utils/blog3Img.jpg';
import peter from './../Utils/peterMaina.jpg';
import jerome from './../Utils/jerome.jpg';
import jermaine from './../Utils/cEo.jpg';

const LazyImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return <img ref={setImageRef} src={imageSrc} alt={alt} className={className} />;
};

const BlogSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const blogPosts = [
    {
      id: 1,
      date: 'July 10,2024',
      category: 'Development',
      title: 'How to build your own online store with this fun and easy step-by-step guide.',
      excerpt: "Hey there! Ever wondered how those cool online stores work? Or maybe you have a fantastic idea for selling stuff online?",
      image: blog3,
      author: {
        name: 'Peter Maina',
        role: 'Lead Developer',
        avatar: peter
      },
      mediumLink: 'https://medium.com/@jeermascriptt/how-to-build-your-own-online-store-with-this-fun-and-easy-step-by-step-guide-7af21332cba0'
    },
    {
      id: 2,
      date: 'Apr 10,2024',
      category: 'Web Design',
      title: 'The future of web development trends, tools, and technology shaping the industry.',
      excerpt: "Imagine having an app that works like your favorite mobile apps but is accessed through the web.",
      image: blog2,
      author: {
        name: 'Jermaine Kariuki',
        role: 'CEO, Director',
        avatar: jermaine
      },
      mediumLink: 'https://medium.com/@jeermascriptt/the-future-of-web-development-trends-tools-and-technologies-shaping-the-industry-2c740670e0c1'
    },
    {
      id: 3,
      date: 'Feb 18,2023',
      category: 'Development',
      title: "Code wizards' secret weapons revealed.",
      excerpt: "Future tech wizards! 🧙‍♂️✨ Are you ready to dive into the magical world of JavaScript frameworks?",
      image: blog1,
      author: {
        name: 'Jerome Mukinda',
        role: 'CTO',
        avatar: jerome
      },
      mediumLink: 'https://medium.com/@jeermascriptt/code-wizards-secret-weapons-revealed-253ab57ea8ae'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading blog posts...</div>;
  }

  return (
    <section className="blog-section">
      <h2>Explore Our Web Development Insights</h2>
      <p className="section-description">
        Stay updated with the latest trends and insights in web development. Our blog
        covers everything from creative design to professional functionality, helping you
        elevate your business online.
      </p>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
            <LazyImage src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-category">{post.category}</span>
              </div>
              <h3 className="post-title">
                <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-author">
                <LazyImage src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="author-role">{post.author.role}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;