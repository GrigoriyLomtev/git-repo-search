import React from "react";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";

function App() {
  return (
    <div className="app">
      <main className="container">
        <nav style={{ padding: "32px 39px 47px 25px" }}>
          <SearchBar />
        </nav>
        <RepoList />
      </main>
    </div>
  );
}

export default App;
