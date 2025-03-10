"use client";
import { Mygenre, Mytype } from "@/components/util/Mytype";
import Link from "next/link";
import ToggleGroupDemo from "./Togglegroup";
import Genre from "../genre/page";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Buttons({ data }: { data: Mygenre[] }) {
  const rounter = useRouter();
  const handleclick = (select: string[]) => {
    rounter.push(`/genre/14?genreIds=${select}`);
  };
  return (
    <ToggleGroup type="multiple" onValueChange={handleclick}>
      <div className=" ">
        {data?.map((genre: Mygenre, index: number) => {
          return (
            <ToggleGroupItem
              key={genre.id}
              value={genre.id.toString()}
              aria-label="Toggle bold"
            >
              {genre.name}
              <ChevronRight />
            </ToggleGroupItem>
          );
        })}
      </div>
    </ToggleGroup>
  );
}
