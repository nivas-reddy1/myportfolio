import Socials from '../components/socials';
import Bio from '../components/bio';
import { TopComponent } from '../components/topcomponent';
import { TestingComponent } from '../components/testingcomponent';
import { SideComponent1 } from '../components/sidecomponent1';
import { SideComponent2 } from '../components/sidecomponent2';

import { LeetCodeCard } from '../components/leetcodecalendar';
import { GithubCalendar } from '../components/gitcalendar';
import { FavoriteSong } from '../components/favoritemusic';


export function LandingPage() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#1B2426] overflow-x-hidden md:overflow-y-hidden">

  <div className="flex flex-col gap-2 p-2 min-h-screen md:items-center md:justify-center md:scale-[0.8]">

    {/* TopComponent - mobile */}
    <div className="flex justify-center md:hidden">
      <TopComponent />
    </div>

    {/* Social + Bio - mobile */}
    <div className="flex flex-row justify-center gap-3 md:hidden mt-3 scale-[0.9]">
      <Socials />
      <Bio />
    </div>

    {/* TestingComponent - mobile */}
    <div className="flex mt-3 justify-center md:hidden">
      <TestingComponent />
    </div>

    {/* SideComponent2 - mobile */}
    <div className="md:hidden mt-5 ml-2 mr-2 flex justify-center">
      <SideComponent2 />
    </div>

    {/* SideComponent1 - mobile */}
    <div className="md:hidden mt-5 ml-2 mr-2 flex justify-center">
      <SideComponent1 />
    </div>

    {/* LeetCode + GitHub + Song - mobile */}
    <div className="flex flex-col gap-3 items-center justify-center md:hidden">
      <div className="w-[380px] mt-5 max-w-[468px] bg-black p-2 rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
        <LeetCodeCard />
      </div>
      <div className="flex justify-center">
      <div className="flex flex-col mt-5 gap-2 items-start w-full max-w-[468px]">
        <div className="bg-[#0D0D0D] ml-2 w-[400px] p-2 rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
          <GithubCalendar />
        </div>
        <div className="w-[380px] m-2 mt-5 mb-10 ">
        <FavoriteSong />
        </div>
      </div>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:flex md:flex-row md:gap-2 ">
      <SideComponent1 />
      <div className="md:flex md:flex-col md:gap-2">
        <div className="md:flex md:justify-center"> 
          <TopComponent />
        </div>
        <div className="md:flex md:flex-row md:gap-2 md:justify-center"> 
          <Socials />
          <Bio />
        </div>
        <div className="md:flex md:justify-center"> 
          <TestingComponent/>
        </div>
      </div>
      <SideComponent2 />
    </div>

    <div className="hidden md:flex md:flex-row md:gap-3 md:items-start md:justify-center md:w-[1120px] md:h-[350px] md:rounded-[2rem] md:mt-1 md:space-around">
      <div className="md:w-[468px] md:h-[354px] md:bg-black md:p-2 md:rounded-2xl md:transition-transform md:duration-300 md:hover:scale-[1.02]">
        <LeetCodeCard />
      </div>
      <div className="md:flex md:flex-col md:items-start md:gap-2">
        <div className="md:bg-[#0D0D0D] md:p-2 md:rounded-2xl md:transition-transform md:duration-300 md:hover:scale-[1.02] ">
          <GithubCalendar /> 
        </div>
        <FavoriteSong />
      </div>
    </div>

  </div>
</div>

 


  
  );
}
