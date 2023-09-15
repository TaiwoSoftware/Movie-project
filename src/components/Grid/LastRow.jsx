import Col from "./Col";
import image1 from "../images/move1.jpeg";
import ImbdLogo from "../images/IMDB - Copy.svg";
import Rotten from "../images/Rotten Tomatoes - Copy.svg";
const LastRow = () => {
  return (
    <div className="row lastRow">
      <Col
        src={image1}
        alt="image1"
        headerOne="I Am Rage"
        special="firstimagestyle"
        logo={ImbdLogo}
        tomatoes={Rotten}
        type="Horror"
        adventure="changing"
      />
      <div className="fix"></div>
    </div>
  );
};

export default LastRow;
