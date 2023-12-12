'use client';

import { useState } from 'react';

import { HomeHeader } from '../components/home/HomeHeader';
import { HomeMenu } from '../components/home/HomeMenu';
import { HomeLanding } from '../components/home/HomeLanding';
import { HomeAbout } from '../components/home/HomeAbout';
import { HomeSkills } from '../components/home/HomeSkills';
import { HomeExperience } from '../components/home/HomeExperience';
import { HomePortfolio } from '../components/home/HomoPortfolio';
import { HomeFooter } from '../components/home/HomeFooter';

export default function Home() {
  const showMenu = (flag: boolean) => {
    setShowMenu(flag);
  };

  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url('../public/bg_noice.png')})`,
      }}>
      {/* {<div className='bg'></div>} */}
      <HomeHeader
        fun={() => {
          showMenu(!isShowMenu);
        }}
      />
      {isShowMenu ? (
        <HomeMenu
          fun={() => {
            showMenu(!isShowMenu);
          }}
        />
      ) : (
        <div></div>
      )}
      <main className='flex flex-col p-24 items-center max-xl:p-28 w-full overflow-x-hidden'>
        <HomeLanding />
        <HomeAbout />
        <HomeSkills />
        <HomeExperience />
        <HomePortfolio />
        <HomeFooter isFooter={true} />
      </main>
    </div>
  );
}
