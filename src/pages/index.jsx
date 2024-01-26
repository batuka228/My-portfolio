import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";
import { About_me } from "@/components/Aboutme";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { GetInTouch } from "@/components/GetInTouch";
const inter = Inter({ subsets: ["latin"] });
import { useRef } from "react";

export default function Home() {
  const about = useRef(null);
  const skills = useRef(null);
  const work = useRef(null);
  const GetIntouch = useRef(null);
  const handleAboutClick = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlTestClick = () => {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleWorkClick = () => {
    work.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    GetIntouch.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Header
        handleAboutClick={handleAboutClick}
        handlTestClick={handlTestClick}
        handleWorkClick={handleWorkClick}
        handleContactClick={handleContactClick}
      ></Header>
      <Profile></Profile>
      <About_me pap={about}></About_me>
      <Skills pep={skills}></Skills>
      <Experience></Experience>
      <Work pop={work}></Work>
      <GetInTouch pup={GetIntouch}></GetInTouch> */
    </div>
  );
}
