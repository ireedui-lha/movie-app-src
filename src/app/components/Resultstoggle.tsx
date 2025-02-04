"use client";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { Genres, Mygenre, Mytype } from "@/components/util/Mytype";

function Resultstoggle({
  genres,
}: {
  genres: { value: string; name: string }[];
}) {
  const { push } = useRouter();
  const handleclick = (select: string[]) => {
    push(`genre/14?genreValue=${select}`);
  };

  return (
    <ToggleGroup type="multiple" onValueChange={handleclick}>
      <div className=" ">
        {genres?.map((genre) => {
          return (
            <ToggleGroupItem
              key={genre.value}
              value={genre.value}
              aria-label="Toggle bold"
            >
              {genre.name}
            </ToggleGroupItem>
          );
        })}
      </div>
    </ToggleGroup>
  );
}
export default Resultstoggle;
