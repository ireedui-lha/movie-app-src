export default async function Next({
  params: { movieid },
}: {
  params: { movieid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);

  return (
    <div>
      {data.original_title}
      <div>
        <img
          className="w-[230px] h-[300px] "
          src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
          alt=""
        />
      </div>
      <div className="flex font-bold gap-4 border-2">
        {data.genres.map((genre: any, index: any) => {
          return (
            <div key={index}>
              <button>{genre.name}</button>
            </div>
          );
        })}
      </div>

      {data.overview}
    </div>
  );
}
