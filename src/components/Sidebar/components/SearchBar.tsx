import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import styles from "./searchBar.module.scss";
import useDisciplines from "../../../Hooks/useDisciplines";

interface SearchBarInterface {
  click: () => void;
}

const SearchBar = ({click}: SearchBarInterface) => {
  const [input, setInput] = useState("");
  const {searchDisciplines} = useDisciplines();

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchDisciplines(input);
    click();
    setInput("");
  };

  return (
    <form className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Pesquisar..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={styles.buttonSearch}
        onClick={(e) => handleClick(e)}
      >
        <BiSearchAlt className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
