import './Pagination.css';

const Pagination = ({ handlePrevPage, handleNextPage, prevURL, nextURL }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={handlePrevPage} disabled={!prevURL}>
        前へ
      </button>
      <button className="button" onClick={handleNextPage} disabled={!nextURL}>
        次へ
      </button>
    </div>
  );
};

export default Pagination;
