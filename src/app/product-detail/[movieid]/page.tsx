import { PaginationDemo } from "@/app/components/Next";

import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Fetchdata from "@/components/util/fetchData";

import { Mytype } from "@/components/util/Mytype";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Next({
  params: { movieid },
}: {
  params: { movieid: string };
}) {
  const trailer = `/movie/${movieid}/videos?language=en-US`;
  const cometrailer = await Fetchdata(trailer);
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
  const plum = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const video = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const grim = await video.json();
  console.log(grim);
  const Sum = await plum.json();

  console.log(Sum);
  const free = await star.json();
  // console.log(free);
  const data = await response.json();
  // console.log(data);

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
      <p>{data.release_date}</p>

      <div className="flex gap-10 relative">
        {/* <p>{?data.adult:"png":"sv"}</p> */}
        <img
          className="w-[290px] h-[428px] relative "
          src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path}
          alt=""
        />

        <Dialog>
          <DialogTrigger
            asChild
            className="w-[760px] h-[428px] absolute left-[400px]  "
          >
            <Button variant="outline">play player</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle></DialogTitle>
            <DialogHeader>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="absolute">
              <img
                src={"https://image.tmdb.org/t/p/w500/" + data?.backdrop_path}
                alt=""
              />
            </div>

            <iframe
              className="absolute bottom-[50px] right-[150px] w-[500px] h-[300px]  "
              src={`https://www.youtube.com/embed/${cometrailer?.results[0].key}`}
            ></iframe>
            {}

            <div className="grid gap-4 py-4 h-[]">
              {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div> */}
              {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex font-bold gap-4 ">
        {data.genres?.map((genre: any, index: any) => {
          return (
            <div key={index}>
              <p>{genre.name}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-20">
        <p>Director</p>
        {free.crew
          ?.filter((crew: Mytype) => crew.department == "Directing")
          .slice(0, 1)
          .map((crew: Mytype, id: number) => {
            return (
              <div>
                <p>{crew.name}</p>
              </div>
            );
          })}
      </div>
      <div className="flex gap-20 ">
        <p>Stars</p>
        <div className="flex gap-10">
          {free.cast?.slice(0, 5).map((actor: Mytype, index: any) => {
            return <p key={index}>{actor.name}</p>;
          })}
        </div>
      </div>
      <p className=" border-2 h-[1px]"></p>

      {data.overview}
      <div className="flex max-w-[1280px] m-auto justify-between h-[59px]">
        <h1 className="text-3xl">More this like</h1>
        <Link href={`/similar-detail/${movieid}`}>Seemore...</Link>
      </div>
      <div className="flex gap-3 flex-wrap">
        {Sum.results?.slice(0, 5).map((movie: Mytype, index: number) => {
          return (
            <Link href={`/product-detail/${movie.id}`}>
              {" "}
              <div key={index} className=" rounded-[20px] overflow-hidden ">
                <img
                  className=" w-[230px] h-[340px]"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
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
  );
}
