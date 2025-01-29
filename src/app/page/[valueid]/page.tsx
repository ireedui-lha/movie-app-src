"use client";

import Popular from "@/app/components/Popular";
import Toprated from "@/app/components/Toprated";
import Upcoming from "@/app/components/Upcoming";
import { useEffect, useState } from "react";

export default function Page({
  params: { valueid },
}: {
  params: { valueid: string };
}) {
  const [movies, setMovies] = useState(null);
  const [page, setpage] = useState(1);
  async function getData() {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
    );
    const data = await result.json();
    setMovies(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
}
