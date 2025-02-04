"use client";

import { Input } from "@/components/ui/input";
import Fetchdata from "@/components/util/fetchData";
import { Mytype } from "@/components/util/Mytype";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Inpit() {
  const [search, setSearch] = useState("");
  const [values, setvalues] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    {
      const Addhandler = async () => {
        const response = await Fetchdata(
          `/search/movie?query=${search.toLowerCase()}&language=en-US`
        );
        setvalues(response.results || []);
      };
      Addhandler();
    }
    [];
  });

  return (
    <div className="">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Input
            className=" ml-3  rounded-md h-[36px] mt- w-[379px]"
            value={search}
            type="text"
            name=""
            id=""
            placeholder={"search"}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpen(e.target.value.length > 0);
            }}
            onFocus={() => setOpen(true)}
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-80"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {values.slice(0, 5).map((movie: Mytype, index: number) => {
            return (
              <div key={index} className="flex w-[577px] border-2 bg-white">
                <Link href={`/product-detail/${movie.id}`}>
                  <div className="bg-white w-[537px] ml-4 mt-3 border-b-2 h-[116px] flex items-center justify-center   ">
                    <img
                      className="h-[100px] w-[67px]"
                      src={
                        `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                      }
                      alt=""
                    />
                    <div className="w-[438px] h-[99px] ml-4 text-black">
                      <p>{movie?.original_title}</p>
                      <div className="flex">
                        <Star className="fill-yellow-400 text-yellow-400 w-[20px]" />{" "}
                        <p>{movie.vote_average}/10</p>{" "}
                      </div>
                      <p>{movie?.release_date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="flex gap-3">
            <Link href={`/results?value=${search}`}>
              <p>See all results for </p>
            </Link>

            <p>"{search}"</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// "use client";
// import Fetchdata from "@/components/util/fetchData";
// import { Mytype } from "@/components/util/Mytype";
// import Link from "next/link";
// import React, { useState } from "react";

// export function Inpit() {
//   const [search, setSearch] = useState("");
//   const [values, setvalues] = useState([]);
//   const Addhandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const search = e.target.value.toLowerCase();
//     setSearch(search);
//     if (search == "") {
//       setvalues([]);
//       return;
//     }
//     const response = await Fetchdata(
//       `/search/movie?query=${e.target.value.toLowerCase()}&language=en-US`
//     );
//     console.log(response);
//     setvalues(response.results || []);
//   };

//   return (
//     <div>
//       <input
//         className="h-[36px] w-[379px]"
//         value={search}
//         type="text"
//         name=""
//         id=""
//         placeholder="serach"
//         onChange={Addhandler}
//       />
//       {values.slice(0, 5).map((movie: Mytype, index: number) => {
//         return (
//           <div>
//             {" "}
//             <div className="flex flex-col">
//               <Link href={`/product-detail/${movie.id}`}>
//                 <div className="bg-white ">
//                   <img
//                     className="h-[100px] w-[67px]"
//                     src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
//                     alt=""
//                   />
//                   <button key={index}>{movie?.original_title}</button>
//                   <p>{search}</p>
//                 </div>
//               </Link>
//             </div>
//             <div className="flex gap-3">
//               <Link href={`/search?value=${search}`}>
//                 <p>See all results for </p>
//               </Link>

//               <p>"{search}"</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
