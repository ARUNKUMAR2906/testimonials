import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card4 from "./components/card4";

import Card5 from "./components/card5";

export default function App() {
  return (
    <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 p-[5%] bg-[#EDF2F8]">
      <div className="md:col-span-2 mt-[5%] mb-[4%] md:mt-0 md:mb-0"><Card1/></div>
      <div className="md:col-start-3 md:row-start-1 mt-[4%] mb-[4%] md:mt-0 md:mb-0 "><Card2/></div>
      <div className="md:col-start-1 md:row-start-2 mt-[4%] mb-[4%] md:mt-0 md:mb-0"><Card3/></div>
      <div className="md:col-span-2 md:col-start-2 md:row-start-2 mt-[4%] mb-[4%]  md:mt-0 md:mb-0"><Card5/></div>
      <div className="md:row-span-2 md:col-start-4 md:row-start-1 mt-[4%] mb-[4%]  md:mt-0 md:mb-0"><Card4/></div>
    </div>
  )
}