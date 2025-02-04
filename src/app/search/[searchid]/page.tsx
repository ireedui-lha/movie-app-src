import Genre from "../page";

const Apge = async ({ params }: { params: Promise<{ genreid: string }> }) => {
  const { genreid } = await params;
  return (
    <div>
      <Genre />
    </div>
  );
};
export default Apge;
