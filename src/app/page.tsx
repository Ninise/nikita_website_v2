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
    console.log(`newValue => value ${flag}`);

    setShowMenu(flag);
  };

  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* <div className='bg'></div> */}
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
      <main className='flex min-h-screen flex-col justify-between p-24 max-xl:p-28'>
        <HomeLanding />
        <HomeAbout />
        <HomeSkills />
        <HomeExperience />
        <HomePortfolio />
        <HomeFooter />
      </main>
    </div>
  );
}
