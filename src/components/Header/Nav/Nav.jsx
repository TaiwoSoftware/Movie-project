import searchButton from '../images/Search.svg'
const Nav = () => {
  return (
    <nav>
      <input 
        type="text" 
        id="search" 
        placeholder="What do you want to watch" 
      />
      <button>
        <img src={searchButton} alt="search-button" />
      </button>
    </nav>
  );
};

export default Nav;
