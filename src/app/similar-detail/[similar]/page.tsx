import { Mytype } from "@/components/util/Mytype";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params: { similar },
}: {
  params: { similar: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const plum = await fetch(
    ` https://api.themoviedb.org/3/movie/${similar}/similar?language=en-US&page=1`,
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
  const Sum = await plum.json();
  console.log(Sum);
  return (
    <div className="w-[1280px] m-auto flex flex-wrap gap-3 mt-[30px]">
      {Sum.results?.map((movie: Mytype, index: number) => {
        return (
          <Link href={`/product-detail/${movie.id}`} key={index}>
            <div key={index} className="rounded-[20px] overflow-hidden">
              <img
                className="w-[230px] h-[300px]"
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
              <div className=" h-[79px] w-[230px]   ">
                <div className="flex">
                  <Star className="fill-current h-4 mt-1" />
                  <p>{butarhai(movie?.vote_average)}/10</p>
                </div>
                <p className="font-bold"> {movie?.original_title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
