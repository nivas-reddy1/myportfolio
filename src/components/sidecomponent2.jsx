import React, { useEffect, useRef } from "react";

export function SideComponent2() {
  const scrollRef = useRef(null);

  const frontends = ["React", "TailwindCSS", "Recoil", "Framer Motion"];
  const backends = ["Node.js", "Express", "FASTAPI"];
  const dbandServices = ["MongoDB", "Github", "Git", "Oauth", "JWT", "Postman"];

  // Duplicate content to allow smooth infinite scroll illusion
  const repeatedContent = [frontends, backends, dbandServices, frontends, backends, dbandServices];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const scrollSpeed = 0.7;

    const scroll = () => {
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0; // reset mid-way for infinite effect
      } else {
        container.scrollTop += scrollSpeed;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-[380px] md:w-[350px] h-[472px] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col shadow-lg transition-all duration-300">
      <div className="text-white font-extrabold text-center text-7xl mb-4">
        Skills
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-hidden space-y-6"
      >
        {repeatedContent.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold text-lg mb-2">
              {index % 3 === 0 ? "Frontend" : index % 3 === 1 ? "Backend" : "DB & Services"}:
            </h3>
            <div className="flex flex-wrap gap-3">
              {section.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-black text-black  text-base rounded-full bg-white transition-transform duration-300 hover:scale-[1.25]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
