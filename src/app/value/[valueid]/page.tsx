"use client";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Mytype } from "@/components/util/Mytype";

import { useRouter, useSearchParams } from "next/navigation";

export default async function Home({
  params: { valueid },
}: {
  params: { valueid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${valueid}&page`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const res = await response.json();
  console.log(res);
  const router = useRouter();
  const searchParams = useSearchParams();

  const genreIds = searchParams.get("genreIds");
  console.log("genreIds", genreIds);

  const onValueChange = (values: string[]) => {
    router.push(`?genreIds=${values}`);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ToggleGroup onValueChange={onValueChange} type="multiple">
        <ToggleGroupItem value="action" aria-label="Toggle action">
          {res.results?.map((movie: Mytype, index: number) => {
            return (
              <div key={index}>
                <p>{movie.name}</p>
              </div>
            );
          })}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
