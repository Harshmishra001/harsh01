import profileImg from "../assets/harsh.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about-section"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 overflow-hidden"
      style={{ zIndex: 100 }}
    >
      {/* Subtle Animated Glow Effect in Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[150px] animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-sky-400">Harsh Kumar Mishra</span>{" "}
          <span className="wave">👋🏻</span>
        </h1>

        {/* Introduction */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Based in <span className="text-sky-400">New Delhi</span>, I'm a
          results-driven{" "}
          <span className="text-sky-400">MERN Stack Developer</span> pursuing my{" "}
          <span className="text-sky-400">
            B.Tech in Computer Science & Engineering
          </span>{" "}
          from Guru gobind singh indraprastha university, New Delhi .
        </p>

        
        {/* 🔹 Technical Skills */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I specialize in{" "}
          <span className="text-sky-400">MERN Stack Development</span>, working with:  
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li><strong className="text-sky-400">Programming:</strong> C, java, JavaScript, HTML, CSS,Typescript</li>
          <li><strong className="text-sky-400">Frontend:</strong> ReactJS, Next.js, Tailwind CSS, Axios, Fetch API</li>
          <li><strong className="text-sky-400">Backend:</strong> Node.js, Express.js, Socket.IO, REST API</li>
          <li><strong className="text-sky-400">Databases:</strong> MongoDB, PostgreSQL, Prisma, </li>
          <li><strong className="text-sky-400">State Management:</strong> Redux Toolkit, Context API</li>
          <li><strong className="text-sky-400">DevOps:</strong> Docker, Git, GitHub, Render, Vercel</li>
          <li><strong className="text-sky-400">Other Skills:</strong> Authentication (JWT, OAuth), API Integration, Web Security, Performance Optimization</li>
        </ul>

        {/* 🔹 Key Projects */}
        <p className="mt-8 text-lg text-gray-300 leading-relaxed">
          Here are some of my major projects:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-4">
        <li>
    <strong className="text-sky-400">BlogNest – AI Powered Blogging Platform:</strong>  
    - Frontend: Built an interactive React.js & Tailwind UI with authentication, blog creation, editing, and exploration, improving load speed by 50%.  
- Backend: Developed a scalable Express.js & Prisma ORM backend, optimizing response time by 50%.  
- AI Integration: Automated blog creation & updates, boosting content efficiency by 100%.  
- Security: Implemented JWT authentication, enhancing data protection by 40%.
  </li>

  <li>
    <strong className="text-sky-400">XenoPay – Paytm-Wallet:</strong>  
    - Frontend: Built a responsive Next.js UI with P2P transactions & money addition, improving UX by 60%.  
- Backend: Developed fast transaction processing with Express.js & Node.js, boosting speed by 40%.  
- Security: Integrated NextAuth & Bcrypt for authentication, enhancing security by 80%.  
- Database: Used Prisma ORM & PostgreSQL for efficient data handling, reducing retrieval time by 30%.
  </li>

  <li>
    <strong className="text-sky-400">Uber – Ride Booking Platform:</strong>  
    - Authentication: Built sign-in, sign-up, and dashboard with MERN stack, improving efficiency by 30%.  
- Real-time Updates: Used Socket.IO for ride creation, captain acceptance, and live tracking, reducing latency by 50% and improving reliability by 40%.  
- Database Optimization: Optimized MongoDB queries, cutting query time by 40% and enhancing processing efficiency by 30%.  
- Live Tracking: Integrated Google Maps API for real-time location services, boosting user satisfaction by 60%.
  </li>
        </ul>
      </motion.div>
      {/* Right Section - Enlarged Profile Image without Blue Tint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
      
        <img
          src={profileImg}
          alt="Harsh Mishra"
          className="rounded-full w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover shadow-lg shadow-sky-500/40 border-4 border-sky-500/30"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
  <motion.div
    initial={{ opacity: 0, width: "0%" }}
    animate={{ opacity: 1, width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="h-[4px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-lg shadow-sky-500 rounded-full"
  ></motion.div>
</div>

      
    </section>
    
  );
}
