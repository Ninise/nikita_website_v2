// 'use client';

// import { useState } from 'react';

// import { HomeHeader } from '../components/home/HomeHeader';
// import { HomeMenu } from '../components/home/HomeMenu';
// import { HomeLanding } from '../components/home/HomeLanding';
// import { HomeAbout } from '../components/home/HomeAbout';
// import { HomeSkills } from '../components/home/HomeSkills';
// import { HomeExperience } from '../components/home/HomeExperience';
// import { HomePortfolio } from '../components/home/HomoPortfolio';
// import { HomeFooter } from '../components/home/HomeFooter';

// export default function Home() {
//   const [isShowMenu, setShowMenu] = useState(false);

//   return (
//     <div className='bg-white dark:bg-black'>
//       <HomeHeader fun={() => setShowMenu(!isShowMenu)} />
//       {isShowMenu && <HomeMenu fun={() => setShowMenu(false)} />}
//       <main className='flex flex-col max-w-5xl mx-auto px-12 max-sm:px-6 w-full overflow-x-hidden'>
//         <HomeLanding />
//         <HomeAbout />
//         <HomeSkills />
//         <HomeExperience />
//         <HomePortfolio />
//         <HomeFooter isFooter={true} />
//       </main>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect('/city-portfolio.html');
}