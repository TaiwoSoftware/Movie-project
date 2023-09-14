const MainPart = () => {
  const apiKey =
    "https://api.themoviedb.org/3/discover/movie?api_key=78bcd9519ba51e4395c843281cef3d37";
  const result = async () => {
    try {
      const res = await fetch(apiKey);
      const data = await res.json();
      
      console.log(data);

      const { page, results } = data;
      const [ result1, result2, result3  ] = results;

      console.log(result1);
      console.log(result2);
      console.log(result3);
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
