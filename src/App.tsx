import "./App.css";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { experiences } from "./db/data";
import { Experience } from "./types";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <div className="container mx-auto">
        <Header />
        <Hero />
        <ExperienceSection />
      </div>
    </div>
  );
}

export default App;
