import { SplittingText } from "@/components/animate-ui/text/splitting";
import Bio from "./Bio";

const Home = () => {
  return (
    <div className="flex flex-col my-auto gap-8">
      <div className="nav flex z-10 justify-between w-full h-fit">
        <SplittingText
          className="bebas-neue-regular text-6xl text-[#ff0065]"
          text="Welcome, my name is Vrashali Naitam."
        />
      </div>
      <div className="body flex z-10 justify-between w-1/2 h-fit">
        <Bio />
      </div>
    </div>
  );
};

export default Home;
