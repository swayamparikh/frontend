import React, { useState } from 'react';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function About() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#fdfdfd',
    padding: '40px 20px',
    color: '#2d2d2d',
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    animation: 'fadeIn 1s ease-in-out',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '12px',
  };

  const subheadingStyle = {
    fontSize: '18px',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const sectionStyle = {
    maxWidth: '900px',
    margin: '0 auto 40px auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    animation: 'slideIn 0.8s ease-in-out',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '14px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#444',
  };

  const imageStyle = (index) => ({
    maxWidth: '160px',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'transform 0.8s',
    transform: hoveredImage === index ? 'rotateY(180deg) scale(1.1)' : 'rotateY(0deg) scale(1)',
  });

  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  const sections = [
    {
      title: '📘 Our Mission',
      text:
        'BookBarter is committed to encouraging reading while promoting sustainability. By enabling users to swap books instead of buying new ones, we reduce paper waste and foster a sense of community. Our mission is to make literature more accessible while keeping it eco-friendly and budget-conscious.',
      img: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d',
    },
    {
      title: '📖 Our Story',
      text:
        'What began as a small idea among readers has evolved into a growing platform. BookBarter was created to connect people who love books and want to share their stories. Whether you\'re into novels, self-help, biographies, or academic reads – there\'s always something for you to discover.',
      img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    },
    {
      title: '🌟 Why BookBarter?',
      text:
        '✔️ Zero Cost Book Swaps – Exchange books without spending extra.\n✔️ Diverse Library – Discover books from genres you never knew you’d enjoy.\n✔️ Reader-First Design – Sleek, minimal, and mobile-friendly interface.\n✔️ Grow Your Shelf – Trade and expand your collection naturally.\n✔️ No Waste, Just Stories – Read, share, repeat.',
      img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
    },
    {
      title: '🚀 Our Vision',
      text:
        'Our vision is to create a world where knowledge is freely exchanged, and books keep moving from one reader to the next. We aim to make book swapping a mainstream habit through technology, trust, and transparency.',
      img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    },
  ];

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <div style={heroStyle}>
          <h1 style={headingStyle}>About BookBarter</h1>
          <p style={subheadingStyle}>
            A modern way to exchange stories, ideas, and imagination. BookBarter helps readers trade books, discover new genres, and build a vibrant reading culture.
          </p>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookshelf"
            style={imageStyle('hero')}
            onMouseEnter={() => handleMouseEnter('hero')}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {sections.map((section, index) => (
          <div key={index} style={sectionStyle}>
            <h2 style={sectionTitleStyle}>{section.title}</h2>
            <p style={paragraphStyle}>{section.text}</p>
            <img
              src={section.img}
              alt={section.title}
              style={imageStyle(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      <Footer />
    </div>
  );
}

export default About;
