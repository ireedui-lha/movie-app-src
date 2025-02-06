"use client";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import { Genres, Mygenre, Mytype } from "@/components/util/Mytype";

function Resultstoggle({ SearchValue }: { SearchValue: Mygenre[] }) {
  const { push } = useRouter();
  const handleclick = (select: string[]) => {
    push(`results/14?resultsValue=${select}`);
  };

  return (
    <ToggleGroup type="multiple" onValueChange={handleclick}>
      <div className=" ">
        {SearchValue?.map((genre: Mygenre, index: number) => {
          return (
            <ToggleGroupItem
              key={index}
              value={genre.id.toString()}
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
