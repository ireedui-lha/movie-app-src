import { Mytype } from "@/components/util/Mytype";

export default async function Home({
  params: { nextid },
}: {
  params: { nextid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const butarhai = (too: number) => {
    return Math.floor((too * 10) / 10)
      .toString()
      .replace(",", ",");
  };

  const data = await response.json();
  return (
    <div>
      {data.results.map((movie: Mytype, index: number, id: number) => {
        return (
          <div key={index}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
