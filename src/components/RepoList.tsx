import React from "react";
import RepoCard from "./RepoCard";
import { useTypedSelector } from "../hooks/useTypedSelector";

// const mediaQueryStyle = {
//   "@media (maxWidth:1260px)": {
//     gridTemplateColumns: "1fr 1fr",
//   },
// };
function RepoList() {
  const { error, items, loading } = useTypedSelector(
    (state) => state.repositories
  );
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "34px 25px",
        gap: "10px",
      }}
    >
      {items.map((repo) => (
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
  );
}

export default RepoList;
