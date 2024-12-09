import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">{article.description}</p>
      <a 
        href={article.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="read-more-link"
      >
        Читати більше
      </a>
    </div>
  );
};

export default ArticleCard;
