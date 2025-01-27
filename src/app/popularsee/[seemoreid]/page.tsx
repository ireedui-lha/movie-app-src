import { PaginationDemo } from "@/app/components/Next";
import { Star } from "lucide-react";

export default async function Next({
  params: { seemoreid },
}: {
  params: { seemoreid: string };
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

  const data = await response.json();
  const butarhai = (too: number) => {
    return Math.floor((too * 10) / 10)
      .toString()
      .replace(",", ",");
  };
  return (
    <div className="max-w-[1280px] mx-[auto]">
      <div className="flex justify-between items-baseline"></div>

      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto  ">
        {data.results.map((movie: any, index: any, id: any) => {
          return (
            <div className="rounded-[20px] overflow-hidden">
              <img
                className="w-[230px] h-[300px] "
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
              <div className="  h-[79px] w-[230px]  ">
                <div className="flex">
                  <Star className="fill-current h-4 mt-1" />
                  <p>{butarhai(movie?.vote_average)}/10</p>
                </div>
                <p className=" font-bold"> {movie?.original_title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <PaginationDemo />
      </div>
    </div>
  );
}
