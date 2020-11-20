import React, { useState } from "react";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Introduzca un término de búsqueda.");
    }
  };

  return (
    <div className="forms">
      <form onSubmit={handleSearch}>
        <p>
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            placeholder="Buscar álbum, artista o lista de reproducción"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button variant="info" type="submit">
            Buscar
          </button>
        </p>
        {errorMsg && <p className="forms__msg error">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default SearchForm;
