import React from "react";
import { useAppDispatch } from "../store";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { setRepositoriesPerPage } from "../slices/repositories-slice";

function Dropdown() {
  const { repositoriesPerPage } = useTypedSelector(
    (state) => state.repositories
  );
  const dispatch = useAppDispatch();

  const onClickCount = (count: number) => {
    dispatch(setRepositoriesPerPage(count));
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {repositoriesPerPage}
      </button>
      <ul className="dropdown-menu" style={{ minWidth: "55px" }}>
        <li>
          <button className="dropdown-item" onClick={() => onClickCount(10)}>
            10
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onClickCount(25)}>
            25
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onClickCount(50)}>
            50
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
