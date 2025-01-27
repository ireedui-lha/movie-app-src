import { useState } from "react";

export default async function getData() {
  const [movies, setMovies] = useState();

  const result = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}"
  );
  const data = await result.json();
  console.log(data);
  let inCome = data.genres.map((movies) => {
    return movies.movie;
  });
  inCome = inCome.flat();
  setMovies(inCome);
}
useEffect(() => {
  getData();
}, []);
const searchHandler = (e) => {
  const input = e.target.value;
  const filtered = movies.filter((city) => {
    return movie.includes(search);
  });
};
