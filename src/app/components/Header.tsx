import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./Modetoggle";
import Buttons from "./Button";
import { Inpit } from "./Inputs";

export default function Header() {
  return (
    <div className="flex justify-between sticky top-0  w-[100vw] p-[16px] h-[59px]">
      <div className="flex gap-5">
        <img src="./film.png" alt="" />
        <h1 className="text-[#4338CA] font-bold text-[20px]">Movie Z</h1>
      </div>
      <div className="flex ">
        <Popover>
          <PopoverTrigger className="text-white">open</PopoverTrigger>
          <PopoverContent className="w-[577px] h-[350px]">
            <h1>Genres</h1>
            <p>See lists of movies by genre</p>
            <Buttons />

            <div className="flex flex-wrap gap-3 "></div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex gap-5 ">
        <Inpit />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
