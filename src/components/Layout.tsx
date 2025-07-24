import { useNavigate, Outlet } from "react-router-dom";
import { BubbleBackground } from "./animate-ui/backgrounds/bubble";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { BiLogoGmail } from "react-icons/bi";
import MailModal from "./MailModal";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const navigate = useNavigate();
  const path = location.pathname;
  const [showMailModal, setShowMailModal] = useState<boolean>(false);
  const [currentRef, setCurrentRef] =
    useState<React.RefObject<HTMLButtonElement | null>>();
  const mainRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const currentRect = currentRef?.current?.getBoundingClientRect();
  const mainRect = mainRef?.current?.getBoundingClientRect();

  function handleIconClick(link: string) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 700);
  }

  useEffect(() => {
    if (path === "/") {
      setCurrentRef(homeRef);
    }
    if (path === "/projects") {
      setCurrentRef(projectsRef);
    }
    if (path === "/about") {
      setCurrentRef(aboutRef);
    }
  }, [path]);

  console.log({
    Main: mainRef?.current?.getBoundingClientRect(),
    Home: homeRef?.current?.getBoundingClientRect(),
    project: projectsRef?.current?.getBoundingClientRect(),
    About: aboutRef?.current?.getBoundingClientRect(),
    current: currentRect,
  });

  return (
    <BubbleBackground
      colors={{
        first: "0,0,0",
        second: "102,0,60",
        third: "0,0,0",
        fourth: "102,0,60",
        fifth: "0,0,0",
        sixth: "102,0,60",
      }}
      interactive
      className="bg-[#000] flex flex-col h-screen text-[#fff] p-4">
      <Toaster />
      <div className="z-10">
        <div
          ref={mainRef}
          className="relative flex gap-2 mx-auto w-fit rounded-full text-lg">
          <span
            className={`bg-[#f3b7c3]/20 absolute rounded-full transition-all duration-300`}
            style={{
              width: currentRect?.width,
              height: currentRect?.height,
              left: currentRect && mainRect && currentRect.left - mainRect.left,
            }}
          />
          <button
            ref={homeRef}
            onClick={() => navigate("/")}
            className={`${location.pathname === "/" ? "rounded-full" : ""}
           hover:cursor-pointer px-4 py-2 z-20`}>
            Home
          </button>
          <button
            ref={projectsRef}
            onClick={() => navigate("/projects")}
            className={`${
              location.pathname === "/projects" ? " rounded-full" : ""
            } hover:cursor-pointer px-4 py-2 z-20`}>
            Projects
          </button>
          <button
            ref={aboutRef}
            onClick={() => navigate("/about")}
            className={`${
              location.pathname === "/about" ? "rounded-full" : ""
            } hover:cursor-pointer px-4 py-2 z-20`}>
            About
          </button>
        </div>
        <div className="fixed right-4 top-4 flex items-center gap-4">
          <motion.button
            onClick={() => handleIconClick("https://github.com/vrashali03")}
            whileTap={{ scale: 0.6 }}
            className="hover:cursor-pointer transition-all">
            <FaGithub size={24} />
          </motion.button>
          <motion.button
            onClick={() => {
              handleIconClick(
                "https://www.linkedin.com/in/vrashali-naitam-a97b931a0/"
              );
            }}
            whileTap={{ scale: 0.6 }}
            className="hover:cursor-pointer transition-all">
            <FaLinkedinIn size={24} />
          </motion.button>
          <motion.button
            onClick={() => setShowMailModal(true)}
            whileTap={{ scale: 0.6 }}
            className="hover:cursor-pointer transition-all">
            <BiLogoGmail size={24} />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {showMailModal && <MailModal setShowMailModal={setShowMailModal} />}
      </AnimatePresence>

      <Outlet />
    </BubbleBackground>
  );
};

export default Layout;
