import Col from "./Col";
import image1 from "../images/move1.jpeg";
import image2 from "../images/movie2.jpeg";
import image3 from "../images/movie3.jpeg";
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
