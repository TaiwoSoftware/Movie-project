import Row from "./Row";
import favoriteIcon from "../images/Favorite.svg";
import clickedfavicon from "../images/FavoriteCopy.svg";
import Row2 from "./Row2";
import Row3 from "./Row3";
import LastRow from "./LastRow";
const MovieGrid = () => {
  
  function clickedIcon() {
    const id = document.querySelector("#Meg2");
    id.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function fastX() {
    const fastx = document.querySelector("#fastx");
    fastx.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function nunClicked() {
    const nun = document.querySelector('#nun');
    nun.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function talkClicked() {
    const talk = document.querySelector('#talk');
    talk.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function barbieClicked() {
    const barbie = document.querySelector('#barbie');
    barbie.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function flashClicked() {
    const flash = document.querySelector('#flash');
    flash.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function elementalClicked() {
    const element = document.querySelector('#elemental');
    element.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function straysClicked() {
    const strays = document.querySelector('#strays');
    strays.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function soundOfFreedomClicked() {
    const soundOfFreedom = document.querySelector('#soundOfFreedom');
    soundOfFreedom.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  function RageClicked() {
    const Rage = document.querySelector('#Rage');
    Rage.setAttribute('src', clickedfavicon);
    alert('added to favorite');
  }

  return (
    <div className="grid">
      <div className="divider">
        <h2>Featured Movie</h2>
        <p>See more &gt; </p>
      </div>
      <Row />
      <img
        src={favoriteIcon}
        onClick={clickedIcon}
        id="Meg2"
        alt="Favorite-icon"
        className="favicon"
      />
      <img
        src={favoriteIcon}
        onClick={fastX}
        id="fastx"
        alt="Favorite-icon"
        className="favicon1"
      />
      <img
        src={favoriteIcon}
        onClick={nunClicked}
        id="nun"
        alt="Favorite-icon"
        className="favicon2"
      />
      <Row2 />
      <img
        src={favoriteIcon}
        onClick={talkClicked}
        id="talk"
        alt="Favorite-icon"
        className="favicon3"
      />
      <img
        src={favoriteIcon}
        onClick={barbieClicked}
        id="barbie"
        alt="Favorite-icon"
        className="favicon4"
      />
      <img
        src={favoriteIcon}
        onClick={flashClicked}
        id="flash"
        alt="Favorite-icon"
        className="favicon5"
      />
      <Row3 />
      <img
        src={favoriteIcon}
        onClick={elementalClicked}
        id="elemental"
        alt="Favorite-icon"
        className="favicon6"
      />
      <img
        src={favoriteIcon}
        onClick={straysClicked}
        id="strays"
        alt="Favorite-icon"
        className="favicon7"
      />
      <img
        src={favoriteIcon}
        onClick={soundOfFreedomClicked}
        id="soundOfFreedom"
        alt="Favorite-icon"
        className="favicon8"
      />
      <LastRow />
      <img
        src={favoriteIcon}
        onClick={RageClicked}
        id="Rage"
        alt="Favorite-icon"
        className="favicon9"
      />
    </div>
  );
};

export default MovieGrid;
