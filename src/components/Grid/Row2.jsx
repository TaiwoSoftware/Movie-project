import Col from "./Col";
import image1 from "https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg";
import image2 from "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg";
import image3 from "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const Row2 = () => {
  return (
    <div className="row row2">
      <Col
        src={image1}
        alt="image1"
        headerOne="Talk to Me"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
      />
      <Col
        src={image2}
        alt="image2"
        headerOne="Barbie"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Love"
        adventure="changing"
      />
      <Col
        src={image3}
        alt="image3"
        headerOne="The Flash"
        special="secondimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Adventure"
        adventure="changing"
      />
      <div className="fix"></div>
    </div>
  );
};

export default Row2;
