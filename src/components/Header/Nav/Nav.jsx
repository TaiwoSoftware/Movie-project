import searchButton from "../images/Search.svg";
const Nav = () => {
  function search() {
    const search = document.querySelector("#search");
    if (search.value === "") {
      alert("Please enter a movie title");
    } else {
      const searchdeatils = document.createElement("div");
      searchdeatils.innerHTML = `Searching for your result ${search.value}`;
      document.body.appendChild(searchdeatils);
      searchdeatils.classList.add("search-p");
    }
  }
  return (
    <nav>
      <input type="text" id="search" placeholder="What do you want to watch" />
      <button>
        <img src={searchButton} onClick={search} alt="search-button" />
      </button>
    </nav>
  );
};

export default Nav;
