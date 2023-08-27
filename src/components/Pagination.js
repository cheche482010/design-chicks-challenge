import React from 'react';
import './css/Pagination.css'; 

const Pagination = () => {
  const PaginationButton = ({ children, active, disabled, onClick }) => {
    const className = `pagination-btn${active ? ' active' : ''}`;
    return (
      <button className={className} disabled={disabled} onClick={onClick}> 
        {children}
      </button>
    );
  };

  return (
    <section className="pagination">
      <PaginationButton disabled><i className="fa-solid fa-chevron-left"></i></PaginationButton>
      <PaginationButton active>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton><i className="fa-solid fa-chevron-right "></i></PaginationButton>
    </section>
  );
}

export default Pagination;
