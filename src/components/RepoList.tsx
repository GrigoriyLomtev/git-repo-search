import React, { useEffect } from "react";
import RepoCard from "./RepoCard";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../store";
import { setRepositories } from "../slices/repositories-slice";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";

function RepoList() {
  const dispatch = useAppDispatch();
  const { error, items, loading, repositoriesPerPage } = useTypedSelector(
    (state) => state.repositories
  );
  const paginatedItems = items.slice(0, repositoriesPerPage);

  useEffect(() => {
    const savedRepositories = localStorage.getItem("repositories");
    if (savedRepositories) {
      const repositories = JSON.parse(savedRepositories);
      dispatch(setRepositories(repositories));
    }
  }, [dispatch]);

  return (
    <div style={{ display: "grid" }}>
      {error && <h1 style={{ margin: "0 auto" }}>Ошибка запроса</h1>}
      {loading && <h1 style={{ margin: "0 auto" }}>Поиск проектов...</h1>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "34px 25px",
          gap: "10px",
        }}
      >
        {!loading &&
          paginatedItems.map((repo) => (
            <RepoCard
              key={repo.id}
              imgUrl={repo.owner.avatar_url}
              name={repo.name}
              author={repo.owner.login}
              stars={repo.stargazers_count}
              watchers={repo.watchers_count}
              html_url={repo.html_url}
              owner_url={repo.owner.html_url}
            />
          ))}
      </div>
      <div style={{ display: "flex", padding: "4px 25px" }}>
        <Dropdown />
        <div style={{ margin: "0 auto" }}>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default RepoList;
