import React, { useEffect } from "react";
import RepoCard from "./RepoCard";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../store";
import { setRepositories } from "../slices/repositories-slice";

// const mediaQueryStyle = {
//   "@media (maxWidth:1260px)": {
//     gridTemplateColumns: "1fr 1fr",
//   },
// };
function RepoList() {
  const { error, items, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const dispatch = useAppDispatch();

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
          items.map((repo) => (
            <RepoCard
              key={repo.id}
              imgUrl={repo.owner.avatar_url}
              name={repo.name}
              author={repo.owner.login}
              stars={repo.stargazers_count}
              watchers={repo.watchers_count}
            />
          ))}
      </div>
    </div>
  );
}

export default RepoList;
