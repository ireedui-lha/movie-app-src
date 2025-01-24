import Image from "next/image";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import Toprated from "./components/Toprated";
import { CarouselDemo } from "./components/Cover";
import Button from "./components/Button";
import Buttons from "./components/Button";

export default function Home() {
  return (
    <div>
      <CarouselDemo />
      <Popular />
      <Upcoming />
      <Toprated />
    </div>
  );
}
