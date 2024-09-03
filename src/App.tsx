import "./App.css";
import BlockchainAnimation from "./components/BlockchainAnimation";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="bg-gray-800">
      <ParticleBackground />
      <div className="container mx-auto min-h-screen px-4">
        <Header />
        <Hero />
        <ExperienceSection />
        <BlockchainAnimation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
