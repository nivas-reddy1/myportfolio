import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const selectLastHalfYear = (contributions) => {
  const currentDate = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(currentDate.getMonth() - 8);

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo && date <= currentDate;
  });
};

export function GithubCalendar() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 text-white">
      <h3 className="self-start pl-2 mb-2 text-lg font-semibold text-white">
        GitHub Contributions
      </h3>

      <div className="relative w-full h-[140px] flex justify-center items-center">
        
        {/* The Calendar */}
        <div 
          className={`transition-opacity duration-1000 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <GitHubCalendar
            username="nivas-reddy1"
            transformData={selectLastHalfYear}
            hideColorLegend
            hideTotalCount
            blockSize={11}
            blockMargin={3}
            fontSize={14}
          />
        </div>

        {/* The Skeleton */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 animate-pulse bg-[#0D0D0D] z-10">
             <div className="w-[300px] h-3 rounded bg-zinc-800"></div>
             <div className="w-[300px] h-20 rounded bg-zinc-800"></div>
             <div className="w-[400px] h-3 rounded bg-zinc-800"></div>
          </div>
        )}
      </div>
    </div>
  );
}