export type Mytype = {
  poster_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
  id: number;
  video: "false" | "true";
  genres: string;
  name: string;
  adult: boolean;
  department: string;
  key: string;
  total_pages: any;
  backdrop_path: string;
  total: number;
  total_results: any;
  release_date: string;
};
export type Mygenre = {
  name: string;
  id: number;
  adult: boolean;
};
export type Genres = {
  name: string;
  id: number;
};
