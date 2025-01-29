import { Mygenre, Mytype } from "@/components/util/Mytype";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params: { genreid },
}: {
  params: { genreid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  const genre = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreid}&page=1`,
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
  const genredata = await genre.json();
  console.log(genredata);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {data.genres?.map((genre: Mygenre, index: number) => {
          return (
            <Link href={`/genre/${genre.id}`}>
              <div className="space-y-5 flex flex-col">
                <div
                  key={index}
                  className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full cursor-pointer space "
                >
                  <button>{genre.name}</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <div className="max-w-[1280px] m-auto">
          <div className="flex justify-between "></div>
          <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto">
            {genredata.results?.map((movie: Mytype, index: number) => {
              return (
                <Link href={`/product-detail/${movie.id}`}>
                  {" "}
                  <div key={index} className=" rounded-[20px] overflow-hidden ">
                    <img
                      className=" w-[230px] h-[340px]"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                      }
                      alt=""
                    />
                    <div className=" h-[79px] w-[230px] ">
                      <div className="flex">
                        <Star className="fill-current h-4 mt-1" />
                        <p>{butarhai(movie?.vote_average)}/10</p>
                      </div>
                      <p className="font-bold">{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
