import Col from "./Col";
// import image1 from '../images/move1.jpeg';
import image1 from "https://image.tmdb.org/t/p/w500//iclmQs4O5dy7EAkbykI1qkowfK2.jpg";
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
