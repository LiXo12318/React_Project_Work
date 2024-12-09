import React from 'react';
import ArticleCard from "../ToDoPage/components/ArticleCard";
import { useArticles } from '../ToDoPage/hooks/useArticles';
import '../ToDoPage/pages/ToDoPage.css';

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
