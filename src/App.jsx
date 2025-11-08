import FormSection from "./components/FormSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import SecondSection from "./components/secondSection";

function App() {
  return (
    <>
      <Navbar />
      <section className="noise-overlay relative h-[100vh] w-[100%]  font-semibold overflow-x-scroll">
        <HeroSection />
        <SecondSection />
        <FormSection />
      </section>
    </>
  );
}

export default App;
