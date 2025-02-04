import Link from "next/link";
import Header from "../components/Header";
import PaginationDemo from "../components/Next";
import { Star } from "lucide-react";

export default async function page() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return (
    <div>
      <div className="grid grid-cols-5 max-w-[1280px] gap-[32px] m-auto  ">
        {data.results.map((movie: any, index: any) => {
          return (
            <Link href={`/product-detail/${movie.id}`}>
              {" "}
              <div key={index} className="rounded-sm overflow-hidden">
                <img
                  className="w-[230px] h-[300px]"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
                <div className="flex">
                  <Star className="fill-current h-4 mt-1" />
                  <p>{movie?.vote_average}</p>
                </div>
                <p className="font-bold">{movie?.original_title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
