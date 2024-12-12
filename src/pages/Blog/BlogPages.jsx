import React from 'react';
import ArticleCard from "./components/ArticleCard";
import { useArticles } from './hooks/useArticles';
import './pages/BlogPage.css';

const ToDoPage = () => {
  const { articles, loading, error } = useArticles();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div className="todo-page">
      <h1 className="page-title">Наш блог</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ToDoPage;
