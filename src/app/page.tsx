import Image from "next/image";
import Header from "./components/Header";

import Upcoming from "./components/Upcoming";

import { useState } from "react";
import Toprated from "./components/Toprated";
import { CarouselDemo } from "./components/Cover";
import Popular from "./components/Popular";

export default async function Home() {
  // const [next, setNext] = useState();
  const Formstep = [];
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);

  const Clicknext = () => {};
  return (
    <div>
      <CarouselDemo />
      <Popular />
      <Upcoming />
      <Toprated />
    </div>
  );
}
