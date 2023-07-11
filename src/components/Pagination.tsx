import React, { useEffect } from "react";
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

  const handlePageChange = (newCurrentPage: number) => {
    dispatch(setCurrentPage(newCurrentPage));
    localStorage.setItem("currentPage", newCurrentPage.toString());
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li className="page-item" key={i}>
          <button
            className={`page-link ${i === currentPage ? "active" : ""}`}
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

  useEffect(() => {
    const currentPageString = localStorage.getItem("currentPage");
    if (currentPageString) {
      const currentPage = Number(currentPageString);
      dispatch(setCurrentPage(currentPage));
    }
  }, [dispatch]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            aria-label="Previous"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {renderPageButtons()}
        <li className="page-item">
          <button
            className={`page-link ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            aria-label="Next"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
