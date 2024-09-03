import profilePic from "../assets/RatanaIMG.jpg";
import {
  backendIcons,
  basicLanguages,
  databaseIcons,
  experiences,
  frontendIcons,
  otherSkills,
  skills,
} from "../db/data";
import { Experience, IconType } from "../types";
import ExperienceCard from "./ExperienceCard";
import Icon from "./Icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-white flex flex-col min-h-screen mt-20 px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Column */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I am Ratana</h1>
          <p className="text-xl">I am a Software Developer</p>
          <p>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Check Resume
          </button>
        </div>
        {/* Photo Column  */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-600">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>

      {/* Skill */}
      <h1 className="mt-20 font-bold text-4xl text-center">Skills</h1>
      <p className="text-lg text-gray-400 mt-4 text-center">
        Here are some of technologies which I have been working with
      </p>

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
