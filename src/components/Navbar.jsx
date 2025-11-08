
import { MdEmail } from "react-icons/md";
import VLOGO from "../assets/Logo/VFilms_Logo.png";
import Menu1 from "../assets/MenuIcons/Vector1.png";
import Menu2 from "../assets/MenuIcons/Vector2.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop animation (right to left)
  const desktopMenu = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    exit: { opacity: 0, x: 60, transition: { duration: 0.4 } },
  };

  const iconVariants = {
    animate: { transition: { duration: 0.4, ease: "easeInOut" } },
  };

  // Mobile overlay animation (slide from right)
  const mobileMenu = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-8xl mx-6 flex items-center justify-between font-instrument-sans">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 py-2">
          <img src={VLOGO} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-6">
          {/* ======== DESKTOP LINKS (animated) ======== */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="hidden md:flex items-center gap-4 relative"
                variants={desktopMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ul className="flex items-center gap-4 text-[16px] text-black py-2">
                  <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                    Services
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                    Their Stories
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                    Our Story
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                    Varnan
                  </li>
                </ul>

                <button className="ml-4 flex items-center gap-2 bg-[#F36B2D] cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:bg-[#e75f1f] transition-all duration-300">
                  Let’s Talk <MdEmail className="text-[18px]" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ======== MENU ICON (Visible on all screens) ======== */}
          {/* Animated Menu Icon */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            className="focus:outline-none"
          >
            <motion.img
              src={isOpen ? Menu2 : Menu1}
              alt="menu"
              className="h-8 cursor-pointer"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
            />
          </motion.button>
        </div>
      </div>

      {/* ======== MOBILE FULL-SCREEN MENU ======== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 w-[200px] h-[250px] bg-[#FDD0C1] text-black md:hidden z-40 top-16 flex flex-col justify-between p-6 shadow-lg rounded-l-lg"
          >
            <ul className="flex flex-col gap-4 ">
              <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                Services
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                Their Stories
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                Our Story
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
                Varnan
              </li>
            </ul>

            <button className="flex items-center gap-2 bg-[#F36B2D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e75f1f] transition-all duration-300">
              Let’s Talk <MdEmail className="text-[20px]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
