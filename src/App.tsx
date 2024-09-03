import "./App.css";
import EducationSection from "./components/EducationSection";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { experiences } from "./db/data";
import { Experience } from "./types";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <div className="container mx-auto min-h-screen px-4">
        <Header />
        <Hero />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}

export default App;
