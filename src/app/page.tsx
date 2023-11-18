'use client';

import { useState } from 'react';

import { HomeHeader } from '../components/home/HomeHeader';
import { HomeLanding } from '../components/home/HomeLanding';
import { HomeAbout } from '../components/home/HomeAbout';
import { HomeSkills } from '../components/home/HomeSkills';
import { HomeExperience } from '../components/home/HomeExperience';
import { HomePortfolio } from '../components/home/HomoPortfolio';
import { HomeFooter } from '../components/home/HomeFooter';

export default function Home() {
  const showMenu = (flag: boolean) => setShowMenu(flag);

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
        <div
          id='menu'
          className='fixed z-90 w-0 h-0 flex justify-center items-center bg-gray-900 opacity-0 duration-700'>
          <a
            href='javascript:void(0)'
            className='fixed top-6 right-8 text-white hover:text-amber-500 text-7xl font-semibold duration-300'
            onClick={() => showMenu(!isShowMenu)}>
            &times;
          </a>
          <div className='flex flex-col text-white text-center text-xl font-light space-y-3'>
            <a
              className='hover:text-amber-500 duration-300'
              href='#'></a>
            <a
              className='hover:text-amber-500 duration-300'
              href='#'></a>
            <a
              className='hover:text-amber-500 duration-300'
              href='#'></a>
            <a
              className='hover:text-amber-500 duration-300'
              href='#'></a>
            <a
              className='hover:text-amber-500 duration-300'
              href='#'></a>
          </div>
        </div>
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
