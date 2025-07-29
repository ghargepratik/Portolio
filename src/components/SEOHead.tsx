import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Pratik Gharge - MERN Stack Developer | Full Stack Web Developer | React.js & Node.js Expert",
  description = "Pratik Gharge is an experienced MERN Stack Developer with 4+ years in full-stack web development. Expert in React.js, Node.js, MongoDB, Express.js, AWS, and building scalable web applications.",
  keywords = "Pratik Gharge, MERN Stack Developer, Full Stack Developer, Frontend Developer, Backend Developer, React.js Developer, Node.js Developer, JavaScript Developer, MongoDB Expert, Express.js, AWS Developer, Web Developer India",
  image = "https://pratikgharge.vercel.app/og-image.jpg",
  url = "https://pratikgharge.vercel.app",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;