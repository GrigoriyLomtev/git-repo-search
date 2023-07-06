import React from "react";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div style={{ padding: "32px 39px 47px 25px" }}>
          <SearchBar />
        </div>
        <RepoList />
      </div>
    </div>
  );
}

export default App;
