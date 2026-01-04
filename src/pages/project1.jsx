import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export function Project() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBackgroundClick = (e) => {
    if (e.target.id === "project-background" || e.target.id === "project-container") {
      navigate("/");
    }
  };

  const projects = [
    {
      title: "Video Chat",
      description: "A full-stack real-time video chat built with React, WebRTC, Socket.IO, and Node.js.",
      githubLink: "https://github.com/my-lord1/Frontend-for-Video-Chat",
      websiteLink: "https://videochat-two.vercel.app",
      desktopImg: "/videochat1.png", 
      mobileImg: "/videochat2.png"
    },
    {
      title: "Gmail Agent",
      description: "A modern React interface designed for a LangGraph-powered Gmail Agent. Please patience to popup signin page as it is not free to deploy backend that runs alltime for a unemployed kid.",
      githubLink: "https://github.com/my-lord1/Gmail-Assistant-FE2",
      websiteLink: "https://gmail-assistant-qqw9.vercel.app",
      desktopImg: "/agent1.png",
      mobileImg: "/agent2.png"
    },
    {
      title: "Github RAG",
      description: "A full-stack Github RAG application built with React, Pinecone, FastAPI and Langchain.",
      githubLink: "https://github.com/my-lord1/Git-Rag-FE",
      websiteLink: "https://githubrag.vercel.app",
      desktopImg: "/gitrag1.png",
      mobileImg: "/gitrag2.png"
    },
    {
      title: "Notes App",
      description: "Developed a notes management application using React JS that allows users to create, organize, and manage notes with tagging, filtering, and data persistence using localStorage.",
      githubLink: "https://github.com/my-lord1/Notes-App",
      websiteLink: "https://notes125.netlify.app",
      desktopImg: "/Notesapp1.png",
      mobileImg: "/Notesapp2.png"
    },
    {
      title: "Movie Review",
      description: "Built a movie review application using React JS that allows users to search and filter movies, view detailed information modal/popup, and provide star-based ratings using the TMDB API.",
      githubLink: "https://github.com/my-lord1/Movie-Review1",
      websiteLink: "https://moviehub121.netlify.app",
      desktopImg: "/review1.png",
      mobileImg: "/review2.png"
    },
    {
      title: "Shooping website Frontend",
      description: "A simple shopping cart application built with React.",
      githubLink: "https://github.com/my-lord1/Add-to-Cart-Task-Using-Router",
      websiteLink: "https://add-to-cart-router1.netlify.app/products",
      desktopImg: "/shop1.png",
      mobileImg: "/shop2.png"
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const isMobile = window.innerWidth < 768;
      const itemStride = isMobile ? 324 : 690;
      
      const newIndex = Math.round(scrollLeft / itemStride);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <div 
      id="project-background" 
      onClick={handleBackgroundClick} 
      className="fixed inset-0 bg-[#1B2426] flex flex-col items-center justify-center overflow-hidden"
    >
      <div 
        id="project-container"
        className="w-full h-full flex flex-col justify-center"
      >
        
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center pointer-events-none z-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base mt-2 md:mt-3"
          >
            {projects[activeIndex]?.title || "Swipe to explore"}
          </motion.p>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 md:gap-10 pb-12 pt-10 snap-x snap-mandatory items-center z-10 no-scrollbar" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingLeft: 'max(24px, calc(50vw - 150px))', 
            paddingRight: 'max(24px, calc(50vw - 150px))',
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .no-scrollbar {
                padding-left: calc(50vw - 325px) !important;
                padding-right: calc(50vw - 325px) !important;
              }
            }
          `}</style>

          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="snap-center shrink-0 origin-center transition-all duration-500 ease-out"
              animate={{
                scale: idx === activeIndex ? 1.1 : 0.9,
                opacity: idx === activeIndex ? 1 : 0.4,
                filter: idx === activeIndex ? "blur(0px)" : "blur(1px)",
                zIndex: idx === activeIndex ? 10 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ResponsiveGlassCard 
                project={project} 
                isActive={idx === activeIndex} 
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Hint */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-white/20 text-xs pointer-events-none">
           Scroll sideways &bull; Tap background to return
        </div>
      </div>
    </div>
  );
}

function ResponsiveGlassCard({ project, isActive }) {
  return (
    <div className="relative w-[300px] h-[650px] md:w-[650px] md:h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 ease-in-out">
      
      <img 
        src={project.mobileImg} 
        alt={`${project.title} mobile`} 
        className="block md:hidden absolute inset-0 w-full h-full object-fit opacity-90"
      />

      <img 
        src={project.desktopImg} 
        alt={`${project.title} desktop`} 
        className="hidden md:block absolute inset-0 w-full h-full object-fit opacity-90"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

      <div 
        className={`absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg transition-transform duration-500 ${
          isActive ? 'translate-y-0' : 'translate-y-2'
        }`}
      >
        
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3">
             <h3 className="text-white font-bold text-lg md:text-2xl tracking-tight shadow-black drop-shadow-md">{project.title}</h3>
             <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500"></span>
             </span>
          </div>
        </div>
        
        <motion.p 
          animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
          className="hidden md:block text-gray-200 text-sm line-clamp-2 leading-relaxed mb-3 font-light text-shadow"
        >
          {project.description}
        </motion.p>

        <div className="flex justify-between md:justify-start md:gap-3 pt-2 md:pt-0 border-t border-white/20 md:border-none md:mt-1">
           <a 
             href={project.githubLink} 
             target="_blank" 
             style={{ pointerEvents: isActive ? 'auto' : 'none' }}
             className={`bg-white text-xs md:text-sm text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1.5 rounded-md hover:bg-white/10 ${!isActive && "opacity-50"}`}
           >
              <GithubIcon /> <span>Code</span>
           </a>
           <a 
             href={project.websiteLink} 
             target="_blank" 
             style={{ pointerEvents: isActive ? 'auto' : 'none' }}
             className={`bg-white text-xs md:text-sm text-blue-300 font-bold hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1.5 rounded-md hover:bg-blue-600/30 ${!isActive && "opacity-50"}`}
           >
              <span>Live Demo</span> <ExternalLinkIcon />
           </a>
        </div>
      </div>
    </div>
  );
}

// Icons
const GithubIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);