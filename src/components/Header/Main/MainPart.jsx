
const MainPart = () => {
  const apiKey =
    'https://api.themoviedb.org/3/discover/movie?api_key=78bcd9519ba51e4395c843281cef3d37';
  const result = async () => {
    try {
      const res = await fetch(apiKey);
      const data = await res.json();

      console.log(data);
      const {page, results } = data;
      console.log(results);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  result();
  return (
    <div className="main-part">
      <h1>Adventure</h1>
    </div>
  );
};

export default MainPart;
