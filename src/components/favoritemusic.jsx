import albumCover from '../icons/future.jpeg';

export function FavoriteSong() {
  return (
    <a
      href="https://music.youtube.com/watch?v=3QjSkB-ZJKQ&list=RDAMVM3QjSkB-ZJKQ"
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl shadow-md bg-[#0D0D0D] transition hover:scale-[1.02]"
    >
      <div className="md:w-[395px] md:h-[75px]">
        <div className="text-right text-xs tracking-wider font-bold text-white mb-2">
          RECENT FAVORITE SONG
        </div>
        <hr className="mb-1 border-white" />
        <div className="flex items-center gap-3">
          <div className="flex-1 text-right">
            <div className="text-lg font-bold bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent drop-shadow">
              SOLO
            </div>
            <div className="text-sm text-white italic tracking-wide">
              FUTURE 
            </div>
          </div>
          <img
            src={albumCover}
            alt="Album cover"
            className="w-12 h-12 rounded-full object-cover transform transition-transform duration-500 group-hover:rotate-[360deg]"
          />
        </div>
      </div>
    </a>
  );
}
