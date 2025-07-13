import React, { useEffect } from "react";
import Particle from "./Particle";
import { motion } from "framer-motion";

const SocialLink = ({ href, iconClass, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="relative z-10"
  >
    <motion.i
      className={`${iconClass} text-white transition-all`}
      whileHover={{ scale: 1.3, rotate: 10, textShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)" }}
      whileTap={{ scale: 0.9 }}
    />
  </a>
);

export default function Home() {
  useEffect(() => {
    // Any other effects you may need
  }, []);

  return (
    <>
      <Particle />
      <div className="home flex flex-col items-center justify-center gap-6 h-screen relative text-center overflow-hidden">
        
        {/* Floating Name with Neon Glow */}
        <motion.p
          className="font-extrabold text-white text-6xl md:text-8xl drop-shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ textShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
        >
          Harsh<span className="text-sky-500"> Kumar Mishra</span>
        </motion.p>

        {/* Subtle Floating Title */}
        <motion.p
          className="text-white text-2xl md:text-3xl tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ textShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
        >
          Software Developer | Problem Solver
        </motion.p>


        {/* Social Links with 3D Effect */}
        <div className="text-white text-3xl md:text-4xl flex gap-8 mt-6">
          <SocialLink href="mailto:harsh.mishra.332003@gmail.com" iconClass="fa-solid fa-envelope" ariaLabel="Email" />
          <SocialLink href="https://drive.google.com/file/d/1ONgTJY5xfpPvv1NS8t32Tr25iNNwVAVg/view" iconClass="fa-solid fa-file-lines" ariaLabel="Download Resume" />
          <SocialLink href="https://www.linkedin.com/in/harsh-mishra001/" iconClass="fa-brands fa-linkedin" ariaLabel="LinkedIn" />
          <SocialLink href="https://github.com/Harshmishra001" iconClass="fa-brands fa-github" ariaLabel="GitHub" />
        </div>

        {/* Neon Pulsating Border */}
        <motion.div
          className="absolute inset-0 border-[3px] border-sky-500 opacity-30 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ pointerEvents: "none" }}
        ></motion.div>

       
      </div>
    </>
  );
}
