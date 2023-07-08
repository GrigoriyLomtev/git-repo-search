import React from "react";
import { useAppDispatch } from "../store";
import { setCurrentPage } from "../slices/repositories-slice";
import { useTypedSelector } from "../hooks/useTypedSelector";

function Pagination() {
  const dispatch = useAppDispatch();
  const { currentPage, repositoriesPerPage } = useTypedSelector(
    (state) => state.repositories
  );

  const totalItems = useTypedSelector(
    (state) => state.repositories.items.length
  );
  const totalPages = Math.ceil(totalItems / repositoriesPerPage);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li className="page-item" key={i}>
          <button
            className="page-link"
            onClick={() => handlePageChange(i)}
            disabled={i === currentPage}
          >
            {i}
          </button>
        </li>
      );
    }

    return buttons;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {renderPageButtons()}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
