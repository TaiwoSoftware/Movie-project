import Button from "./Button";
import Details from "./Details";
import ImbdLogo from "./ImbdLogo";
import RottenLogo from "./RottenLogo";

const MainPart = () => {
  const apiKey =
    "https://api.themoviedb.org/3/discover/movie?api_key=78bcd9519ba51e4395c843281cef3d37";
  const result = async () => {
    try {
      const res = await fetch(apiKey);
      const data = await res.json();

      console.log(data);
      const { results } = data;
      const mappedResult = results.map((result) => {
        const { backdrop_path, title } = result;
        console.log(backdrop_path);
        console.log(title);
      });
      mappedResult();
    } catch (error) {
      console.log(error, "Error");
    }
  };

  result();
  return (
    <div>
      <div className="main-part">
        <h1 className="main-part-h1">
          The Last Voyage <span className="span">of the Demeter</span>
        </h1>
        <ImbdLogo />
        <RottenLogo />
        <Details />
        <Button />
      </div>
    </div>
  );
};

export default MainPart;
