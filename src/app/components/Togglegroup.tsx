"use client";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";

function ToggleGroupDemo({
  genres,
}: {
  genres: { id: string; name: string }[];
}) {
  const { push } = useRouter();
  const handleclick = (select: string[]) => {
    push(`/genre/14?genreIds=${select}`);
  };
  return (
    <ToggleGroup type="multiple" onValueChange={handleclick}>
      <div className=" ">
        {genres?.map((genre) => {
          return (
            <ToggleGroupItem
              key={genre.id}
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
export default ToggleGroupDemo;
