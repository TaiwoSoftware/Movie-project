import Row from "./Row";
import favoriteIcon from "../images/Favorite.svg";
import Row2 from "./Row2";
import Row3 from "./Row3";
import LastRow from "./LastRow";
const MovieGrid = () => {
  return (
    <div className="grid">
      <div className="divider">
        <h2>Featured Movie</h2>
        <p>See more &gt; </p>
      </div>
      <Row />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon1" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon2" />
      <Row2 />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon3" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon4" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon5" />
      <Row3 />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon6" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon7" />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon8" />
      <LastRow />
      <img src={favoriteIcon} alt="Favorite-icon" className="favicon9" />
    </div>
  );
};

export default MovieGrid;
