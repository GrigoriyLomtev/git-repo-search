import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../slices/repositories-slice";
import { useAppDispatch } from "../store";

function SearchBar() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const searchRepo = async () => {
    if (inputValue.length > 2) {
      dispatch(fetchRepositories({ searchTerm: inputValue }));

      // const result = await fetch(
      //   `https://api.github.com/search/repositories?q=${inputValue}`
      // );
      // const data = await result.json();
      // console.log(data);
    }
  };

  const onChangeSearchBarValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    localStorage.setItem("searchBarValue", newValue);
  };

  useEffect(() => {
    const savedSearchBarValue = localStorage.getItem("searchBarValue");
    if (savedSearchBarValue) {
      setInputValue(savedSearchBarValue);
    }
  }, []);

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        aria-label="Search"
        aria-describedby="basic-addon2"
        minLength={3}
        onChange={(e) => {
          onChangeSearchBarValue(e);
        }}
        value={inputValue}
      />
      <button
        className="btn btn-primary"
        id="basic-addon2"
        onClick={searchRepo}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBar;
