import "./App.css";
import BlockchainAnimation from "./components/BlockchainAnimation";
import EducationSection from "./components/EducationSection";
import EndAnimation from "./components/EndAnimation";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-gray-800">
      <ParticleBackground />
      <ScrollProgress />
      <div className="container mx-auto min-h-screen px-4 bg-gray-800">
        <Header />
        <Hero />
        <ExperienceSection />
        <BlockchainAnimation />
        <EducationSection />
        <EndAnimation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
