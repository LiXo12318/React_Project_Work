// src/hooks/usePagination.js
import { useState } from 'react';

const usePagination = (itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (items) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const goToPage = (page) => setCurrentPage(page);

  return { currentPage, paginate, nextPage, prevPage, goToPage };
};

export default usePagination;
