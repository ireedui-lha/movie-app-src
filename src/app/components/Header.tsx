import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./Modetoggle";
import Buttons from "./Button";
import { Inpit } from "./Inputs";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Page from "../value/page";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Header() {
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
  return (
    <Card className="flex justify-between sticky top-0  w-[100vw] p-[16px] h-[59px] z-10 ">
      <div className="w-[1280px] m-auto flex justify-between">
        <Link href={"/"}>
          <div className="flex gap-5">
            <img
              className="h-[22px] w-[22px] mt-[3px]"
              src="/film.png"
              alt=""
            />
            <h1 className="text-[#4338CA] font-semibold text-[17px] mt-[2px]">
              Movie Z
            </h1>
          </div>
        </Link>

        <div className="flex ">
          <Popover>
            <PopoverTrigger
              asChild
              className="border-[#E4E4E7] rounded-[5px] w-[97px] h-[36px]"
            >
              <Button variant="outline">Genres</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[577px] h-[300px] p-5">
              <h1 className="text-3xl font-semibold  ">Genres</h1>
              <p className="text-2xl font-normal mt-[5px] border-b-2 ">
                See lists of movies by genre
              </p>
              <div className="mt-[13px]">
                <Buttons data={data.genres} />
              </div>

              <div className="flex flex-wrap gap-3 "></div>
            </PopoverContent>
          </Popover>
          <Inpit />
        </div>

        <ModeToggle />
      </div>
    </Card>
  );
}
