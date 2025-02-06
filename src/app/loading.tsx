import { Skeleton } from "@/components/ui/skeleton";
import Header from "./components/Header";

const SkeletonDemo = () => {
  return (
    <div className=" w-screen m-auto">
      <Skeleton className="h-[600px] w-[100vw] " />
      <div className="flex max-w-[1280px] m-auto justify-between h-[59px] mt-[20px] ">
        <Skeleton className="h-[40px] w-[150px]" />
        <Skeleton className="h-[40px] w-[150px]" />
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto mt-[15px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return <Skeleton key={i} className="w-[230px] h-[300px]" />;
        })}{" "}
      </div>
      <div className="flex max-w-[1280px] m-auto justify-between h-[59px] mt-[20px] ">
        <Skeleton className="h-[40px] w-[150px]" />
        <Skeleton className="h-[40px] w-[150px]" />
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto mt-[15px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return <Skeleton key={i} className="w-[230px] h-[300px]" />;
        })}{" "}
      </div>
      <div className="flex max-w-[1280px] m-auto justify-between h-[59px] mt-[20px] ">
        <Skeleton className="h-[40px] w-[150px]" />
        <Skeleton className="h-[40px] w-[150px]" />
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto mt-[15px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return <Skeleton key={i} className="w-[230px] h-[300px]" />;
        })}{" "}
      </div>
    </div>
  );
};
export default SkeletonDemo;
