import React from 'react';

type HomeHeaderProps<T> = {
  fun: T;
};

export const HomeMenu: React.FC<HomeHeaderProps<() => void>> = ({ fun }) => {
  return (
    <div
      id='menu'
      className='fixed z-90 w-full h-full bg-menu-back flex justify-center items-center duration-700'>
      <button
        className='fixed top-6 right-8 text-midnight hover:text-amber-500 text-7xl font-semibold duration-300'
        onClick={() => fun()}>
        &times;
      </button>
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
  );
};
