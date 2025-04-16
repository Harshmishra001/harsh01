
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";

// export default function WorkEx() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-out-back" });
//   }, []);

//   return (
//     <section
//       id="workex-container"
//       className="relative z-10 bg-gradient-to-b from-gray-900 to-slate-950 py-20 overflow-hidden"
//     >
//       {/* Subtle Animated Glow Effect in Background */}
//       <div className="absolute inset-0 pointer-events-none max-w-[100vw] overflow-hidden">

//         <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[120px] animate-pulse absolute -top-20 left-1/2 -translate-x-1/2"></div>
//       </div>
//       <motion.h3
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="text-sky-400 text-center text-4xl sm:text-5xl font-extrabold mb-14 drop-shadow-lg"
//       >
//         Work<span className="text-white"> & Experience</span>
//       </motion.h3>

//       {/* ✅ Timeline Container */}
//       <div className="mt-16 relative">
//         {/* 📍 Timeline Line (Vertical) */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-600"></div>

       

//         {/* 🔹 CodSoft Web Developer */}
//         <div
//           className="flex flex-col md:flex-row items-center md:even:flex-row-reverse justify-between mb-16"
//           data-aos="fade-right"
//           data-aos-delay="300"
//         >
//           {/* Marker (Centered) */}
//           <div className="w-6 h-6 rounded-full bg-sky-500 shadow-lg shadow-sky-500 transition-all transform hover:scale-125 hover:shadow-2xl absolute left-1/2 -translate-x-1/2"></div>

//           Left Side Content
//           <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] hover:scale-105 hover:shadow-2xl transition-all duration-300 md:ml-auto">
//             <h3 className="text-sky-500 text-lg font-bold flex items-center">
//               <i className="fas fa-laptop-code mr-2"></i> CodSoft Web Developer
//             </h3>
//             <span className="text-sm text-gray-400">Remotely</span>
//             <p className="text-white mt-2 italic">November 2023 - December 2023</p>
//             <p className="text-gray-400 text-justify mt-4 leading-relaxed">
//               <strong>🔹 Portfolio Development:</strong> Built a personal portfolio with dynamic content.
//               <br />
//               <strong>🔹 Calculator App:</strong> Developed a functional calculator in Python & JavaScript.
//               <br />
//               <strong>🔹 Weather App:</strong> Created a weather app fetching real-time data.
//             </p>
//           </div>
//         </div>

//         🔹 Bharat Intern
//         <div
//           className="flex flex-col md:flex-row items-center md:odd:flex-row justify-between mb-16"
//           data-aos="fade-left"
//           data-aos-delay="300"
//         >
//           {/* Marker (Centered) */}
//           <div className="w-6 h-6 rounded-full bg-sky-500 shadow-lg shadow-sky-500 transition-all transform hover:scale-125 hover:shadow-2xl absolute left-1/2 -translate-x-1/2"></div>

//           {/* Right Side Content */}
//           <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] hover:scale-105 hover:shadow-2xl transition-all duration-300 md:mr-auto">
//             <h3 className="text-sky-500 text-lg font-bold flex items-center">
//               <i className="fas fa-laptop-code mr-2"></i> Bharat Intern
//             </h3>
//             <span className="text-sm text-gray-400">Remotely</span>
//             <p className="text-white mt-2 italic">December 2023 - January 2024</p>
//             <p className="text-gray-400 text-justify mt-4 leading-relaxed">
//               <strong>🔹 Netflix Clone:</strong> Developed a Netflix-like platform using React & Node.js.
//               <br />
//               <strong>🔹 Authentication:</strong> Implemented login and user account features.
//               <br />
//               <strong>🔹 Optimized Streaming:</strong> Used APIs for smooth video playback.
//             </p>
//           </div>
//         </div>
//          {/* 🔹 Ceeras IT Services Internship (New Entry) */}
//          <div
//           className="flex flex-col md:flex-row items-center md:even:flex-row-reverse justify-between mb-16"
//           data-aos="fade-right"
//           data-aos-delay="300"
//         >
//           {/* Marker (Centered) */}
//           <div className="w-6 h-6 rounded-full bg-sky-500 shadow-lg shadow-sky-500 transition-all transform hover:scale-125 hover:shadow-2xl absolute left-1/2 -translate-x-1/2"></div>

//           {/* Left Side Content */}
//           <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] hover:scale-105 hover:shadow-2xl transition-all duration-300 md:ml-auto">
//             <h3 className="text-sky-500 text-lg font-bold flex items-center">
//               <i className="fas fa-laptop-code mr-2"></i> Ceeras IT Services - MERN Stack Intern
//             </h3>
//             <span className="text-sm text-gray-400">Remotely</span>
//             <p className="text-white mt-2 italic">Feb 2025 - Aug 2025</p>
//             <p className="text-gray-400 text-justify mt-4 leading-relaxed">
//               <strong>🔹 Full-Stack Development:</strong> Designed & implemented frontend and backend components.
//               <br />
//               <strong>🔹 System Integration:</strong> Worked with cross-functional teams for seamless API integration.
//               <br />
//               <strong>🔹 Debugging & Optimization:</strong> Troubleshot and improved system performance.
//             </p>
//           </div>
//         </div>

//         {/* 🔹 Aksonilive Technologies Internship */}
//         <div
//           className="flex flex-col md:flex-row items-center md:odd:flex-row justify-between mb-16"
//           data-aos="fade-left"
//           data-aos-delay="300"
//         >
//           {/* Marker (Centered) */}
//           <div className="w-6 h-6 rounded-full bg-sky-500 shadow-lg shadow-sky-500 transition-all transform hover:scale-125 hover:shadow-2xl absolute left-1/2 -translate-x-1/2"></div>

//           {/* Right Side Content */}
//           <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] hover:scale-105 hover:shadow-2xl transition-all duration-300 md:mr-auto">
//             <h3 className="text-sky-500 text-lg font-bold flex items-center">
//               <i className="fas fa-laptop-code mr-2"></i> Aksonilive Technologies - Full Stack Intern
//             </h3>
//             <span className="text-sm text-gray-400">Remotely (WFH)</span>
//             <p className="text-white mt-2 italic">Feb 2025 - May 2025</p>
//             <p className="text-gray-400 text-justify mt-4 leading-relaxed">
//               <strong>🔹 MERN Stack Development:</strong> Worked on Full Stack projects using React.js, Node.js, Express.js, and MongoDB.
//               <br />
//               <strong>🔹 API Integration:</strong> Developed and integrated REST APIs for real-world applications.
//               <br />
//               <strong>🔹 Team Collaboration:</strong> Worked remotely with experienced mentors, gaining hands-on development experience.
//             </p>
//           </div>
//         </div>
//       </div>
//        {/* ✅ Glowing Horizontal Line at the Bottom */}
//        <motion.div
//         initial={{ opacity: 0, width: "0%" }}
//         animate={{ opacity: 1, width: "100%" }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="mt-16 h-[4px] bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-lg shadow-sky-500 rounded-full"
//       ></motion.div>
//     </section>
//   );
// }

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function WorkEx() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-back" });
  }, []);

  return (
    <section
      id="workex-container"
      className="relative z-10 bg-gradient-to-b from-gray-900 to-slate-950 py-20 overflow-hidden"
    >
      {/* Subtle Animated Glow Effect in Background */}
      <div className="absolute inset-0 pointer-events-none max-w-[100vw] overflow-hidden">
        <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[120px] animate-pulse absolute -top-20 left-1/2 -translate-x-1/2"></div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sky-400 text-center text-4xl sm:text-5xl font-extrabold mb-14 drop-shadow-lg"
      >
        Work<span className="text-white"> & Experience</span>
      </motion.h3>

      {/* ✅ Timeline Container */}
      <div className="mt-16 relative">
        {/* 📍 Timeline Line (Vertical) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-600"></div>

        {/* 🔹 IIT Bombay Web Dev Intern */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {/* Marker (Centered) */}
          <div className="w-6 h-6 rounded-full bg-sky-500 shadow-lg shadow-sky-500 transition-all transform hover:scale-125 hover:shadow-2xl absolute left-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] hover:scale-105 hover:shadow-2xl transition-all duration-300 md:ml-auto">
            <h3 className="text-sky-500 text-lg font-bold flex items-center">
              <i className="fas fa-laptop-code mr-2"></i> Web Development Intern - IIT Bombay
            </h3>
            <span className="text-sm text-gray-400">Remotely</span>
            <p className="text-white mt-2 italic">September 2024 - October 2024</p>
            <p className="text-gray-400 text-justify mt-4 leading-relaxed">
              <strong>🔹 Full-Stack E-commerce Platform:</strong> Built robust and scalable production-level features using Express.js, React.js, and MongoDB.
              <br />
              <strong>🔹 Version Control:</strong> Managed code with Git and GitHub, minimizing conflicts in a 6-member team.
              <br />
              <strong>🔹 API Integration:</strong> Collaborated with frontend developers for seamless integration of backend APIs and user interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Glowing Horizontal Line at the Bottom */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mt-16 h-[4px] bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-lg shadow-sky-500 rounded-full"
      ></motion.div>
    </section>
  );
}
