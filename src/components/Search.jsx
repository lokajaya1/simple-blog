import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = () => {
    props.searchChange(search);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <div>
      <div>
        Search Article :{" "}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onKeyDown}
          value={search}
        />
        <button onClick={changeSearch}>Search</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} Data dengan pencarian kata {search}
      </small>
    </div>
  );
}

export default Search;
