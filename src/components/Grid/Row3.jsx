import Col from "./Col";
// import image1 from '../images/move1.jpeg';
// import image2 from '../images/movie2.jpeg'
// import image3 from '../images/movie3.jpeg'
import image1 from "https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg";
import image2 from "https://image.tmdb.org/t/p/w500//n1hqbSCtyBAxaXEl1Dj3ipXJAJG.jpg";
import image3 from "https://image.tmdb.org/t/p/w500/FQHtuf2zc8suMFE28RyvFt3FJN.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const Row3 = () => {
    return (
        <div className="row row3">
      <Col
        src={image1}
        alt="image1"
        headerOne="Elemental"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
      />
      <Col
        src={image2}
        alt="image2"
        headerOne="Strays"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Fantasy"
        adventure="changing"
      />
      <Col
        src={image3}
        alt="image3"
        headerOne="Sound of Freedom"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Drama"
        adventure="changing"
      />
      <div className="fix"></div>
    </div>
    );
}

export default Row3;
