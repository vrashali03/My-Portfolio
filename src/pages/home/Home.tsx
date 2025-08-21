import { SplittingText } from "@/components/animate-ui/text/splitting";
import Bio from "./Bio";
import MailForm from "./MailForm";

const Home = () => {
  return (
    <div className="h-screen z-10 w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <div className="h-screen w-full flex flex-col justify-center items-start gap-8 snap-start px-8">
        {/* Intro Section */}
        <div className="nav flex justify-between w-full h-fit">
          <SplittingText
            className="bebas-neue-regular text-6xl text-[#ff0065]"
            text="Welcome, my name is Vrashali Naitam."
          />
        </div>
        <div className="body flex justify-between w-full md:w-2/3 lg:w-1/2 h-fit">
          <Bio />
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="mail"
        className="h-screen w-full flex flex-col justify-center items-center snap-start px-8">
        <MailForm />
      </div>
    </div>
  );
};

export default Home;
