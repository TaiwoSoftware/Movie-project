import { useState } from "react";
import searchButton from "../images/Search.svg";
import loading from "../images/loading.gif";
const Nav = () => {
  function search() {
    const search = document.querySelector("#search");
    if (search.value === "") {
      alert("Please enter a movie title");
    } else {
      const changeImageSrc = document.querySelector("#image1");
      const searchdeatils = document.createElement("div");
      searchdeatils.innerHTML = `Searching for your result ${search.value}`;
      document.body.appendChild(searchdeatils);
      searchdeatils.classList.add("search-p");
      changeImageSrc.setAttribute("src", loading);
      changeImageSrc.classList.toggle('loading')
    }
  }
  return (
    <nav>
      <input type="text" id="search" placeholder="What do you want to watch" />
      <button>
        <img
          src={searchButton}
          onClick={search}
          alt="search-button"
          id="image1"
        />
      </button>
    </nav>
  );
};

export default Nav;
