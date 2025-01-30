"use client";
import Fetchdata from "@/components/util/fetchData";
import { Mytype } from "@/components/util/Mytype";
import Link from "next/link";
import React, { useState } from "react";

export function Inpit() {
  const [search, setSearch] = useState("");
  const [values, setvalues] = useState([]);
  const Addhandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    if (search == "") {
      setvalues([]);
      return;
    }
    const response = await Fetchdata(
      `/search/movie?query=${e.target.value.toLowerCase()}&language=en-US`
    );
    console.log(response);
    setvalues(response.results || []);
  };

  return (
    <div>
      <input
        className="h-[36px] w-[379px]"
        value={search}
        type="text"
        name=""
        id=""
        placeholder="serach"
        onChange={Addhandler}
      />
      {values.slice(0, 5).map((movie: Mytype, index: number) => {
        return (
          <div>
            {" "}
            <div className="flex flex-col">
              <Link href={`/product-detail/${movie.id}`}>
                <div className="bg-white ">
                  <img
                    className="h-[100px] w-[67px]"
                    src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                    alt=""
                  />
                  <button key={index}>{movie?.original_title}</button>
                  <p>{search}</p>
                </div>
              </Link>
            </div>
            <p>dhuis</p>
          </div>
        );
      })}
    </div>
  );
}
