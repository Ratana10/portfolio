import profilePic from "/RatanaIMG.png";
import RatanaPic from "/Ratana.jpg";
import { skills } from "../db/data";
import Icon from "./Icon";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ContactSection from "./ContactSection";

const Hero = () => {
  const subTitleRef = useRef(null);

  useEffect(() => {
    const subtitleOptions = {
      strings: ["Software Developer", "Java Developer", "Blockchain Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const subtitleTyped = new Typed(subTitleRef.current, subtitleOptions);

    return () => {
      subtitleTyped.destroy();
    };
  }, []);

  return (
    <section id="hero" className="text-white flex flex-col mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Photo Column  */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-48 h-60 md:w-64 md:h-64 overflow-hidden border  rounded-2xl py-2">
            <img src={profilePic} alt="photo" className=""/>
          </div>
        </div>

        {/* Text Column */}
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Hi, I am Ratana
          </h1>
          <p className="text-2xl text-white font-bold">
            I'm a <span className="text-purple-400" ref={subTitleRef}></span>
          </p>
          <p className="text-lg">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <ContactSection />
        </div>
      </div>

      {/* Skill */}
      <div id="#skill" className="text-center">
        <h1 className="mt-20 font-extrabold text-5xl">Skills</h1>
        <p className="text-lg text-gray-400 mt-4">
          Here are some of technologies I've been working with
        </p>
      </div>

      {/* Icons */}
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((item: any, index: number) => (
            <Icon key={index} name={item.name} src={item.src} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
