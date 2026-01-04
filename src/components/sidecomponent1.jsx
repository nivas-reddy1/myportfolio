import { useState } from 'react';

export function SideComponent1() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div className="relative w-[380px] md:w-[350px] md:h-[472px] bg-[#0D0D0D] rounded-[30px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center">
      <div className="mt-2 text-white text-left p-4 text-lg font-semibold w-full h-full">
        <div>
          <p>
            I'm someone who learns fast, adapts easily, and enjoys working with different people and ideas.
          </p>
          <p className="mt-2">
            Whether it's building solo or collaborating in a team, I focus on creating clean, optimal code and always improving with each project.
          </p>
          <p className="mt-2">
            This site reflects my journey — what's built, what's broken, and what's next.
          </p>
          <p className="mt-2">
            Let’s connect if you vibe with my work.
          </p>
          <p className="text-right text-lg italic">- Bhoge Sai Nivas Reddy</p>
          <p className="pr-3 text-sm text-right text-white">
            <span className="underline cursor-pointer" onClick={() => handleCopy('bhogesainivas@gmail.com', 'Gmail')}>bhogesainivas@gmail.com</span>
            {copied === 'Gmail' && <span className="ml-2 text-green-400">Copied!</span>}
          </p>
        </div>
        <div className='mt-5 mr-15 text-right transition-transform duration-300 hover:scale-[1.05]'>
          <a href="/resume04_1.pdf" target="_blank" className="text-right px-4 py-2 border-6 border-green-400 text-black rounded-lg bg-white">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}


/*
w-full bg-gradient-to-br from-white/50 to-white/20 p-4 rounded-2xl shadow-md backdrop-blur-sm overflow-hidden

*/