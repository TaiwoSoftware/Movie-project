import Col from "./Col";
import image1 from "https://image.tmdb.org/t/p/w500/FQHtuf2zc8suMFE28RyvFt3FJN.jpg";
import image2 from "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg";
import image3 from "https://image.tmdb.org/t/p/w500//5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const Row = () => {
  return (
    <div className="row">
      <Col
        src={image1}
        alt="image1"
        headerOne="Meg 2: The Trench"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
      />
      <Col
        src={image2}
        alt="image2"
        headerOne="Fast X"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Action"
        adventure="changing"
      />
      <Col
        src={image3}
        alt="image3"
        headerOne="The Nun II"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Horror"
        adventure='changing'
      />
      <div className="fix"></div>
    </div>
  );
};

export default Row;
