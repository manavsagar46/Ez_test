import Mandala from "../assets/HeroSection/Hero_Mandala.png";
import LOGO from "../assets/Logo/VFilms_Logo.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-[100%] h-auto md:h-[90vh] flex flex-col md:flex-row justify-centeritems-center">
      {/* LEFT DIV */}
      <div className="left w-[100%] md:w-1/2 h-auto md:h-[90vh]  flex items-center justify-center relative">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "backInOut" }}
          className="flex justify-center items-center"
        >
          <motion.img
            src={Mandala}
            alt="Mandala"
            animate={{ rotate: [0, -360] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="w-64 sm:w-80 md:w-[500px]"
          />
        </motion.div>
        <img
          src={LOGO}
          alt="VFilms Logo"
          className="absolute w-32 sm:w-40 md:w-80"
        />
      </div>

      {/* RIGHT DIV */}
      <div
        className="right w-[100%] md:w-1/2 h-auto md:h-[90vh] flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16"
      >
        <div className="font-island-moments font-normal text-4xl sm:text-6xl md:text-7xl text-[#0F3255] mt-10 md:mt-0">
          <h1>Varnan is where stories find their voice and form</h1>
        </div>

        <div className="font-halant font-normal text-2xl sm:text-3xl md:text-4xl text-[#F15D2B] mt-6">
          <h2>Films . Brands . Art</h2>
        </div>

        <div className="font-instrument-sans font-normal text-base sm:text-lg text-[#252729] mt-6 md:mt-8 px-4 sm:px-8 md:px-16">
          <p>
            Since 2009, V’ve been telling stories - stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way - by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
