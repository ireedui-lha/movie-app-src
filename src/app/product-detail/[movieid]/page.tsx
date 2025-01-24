import { Mytype } from "@/components/util/Mytype";
import { Star } from "lucide-react";

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
  const star = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const free = await star.json();
  console.log(free);
  const data = await response.json();
  console.log(data);

  const butarhai = (too: number) => {
    return Math.floor((too * 10) / 10)
      .toString()
      .replace(",", ",");
  };
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold"> {data.original_title}</p>
        <div className="flex">
          <Star className="fill-current h-4 mt-1" />
          <p>{butarhai(data.vote_average)}/10</p>
        </div>
      </div>

      <div>
        <p>{data.release_date}</p>
        {/* <p>{?data.adult:"png":"sv"}</p> */}
        <img
          className="w-[290px] h-[428px] "
          src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
          alt=""
        />
      </div>
      <div className="flex font-bold gap-4 ">
        {data.genres.map((genre: any, index: any) => {
          return (
            <div key={index}>
              <p>{genre.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <p>Director</p>
      </div>
      <div className="flex gap-20 ">
        <p>Stars</p>
        <div className="flex gap-10">
          {free.cast.slice(0, 5).map((actor: Mytype, index: any) => {
            return <p key={index}>{actor.name}</p>;
          })}
        </div>
      </div>
      <p className=" border-2 h-[1px]"></p>

      {data.overview}
    </div>
  );
}
