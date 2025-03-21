import React from 'react';

import Link from 'next/link';

import { HomeFooter } from './HomeFooter';

type HomeHeaderProps<T> = {
  fun: T;
};

export const HomeMenu: React.FC<HomeHeaderProps<() => void>> = ({ fun }) => {
  const TABLET_BTN: string = 'max-xl:px-3 max-xl:py-3 max-xl:right-12';
  const MOBILE_BTN: string = ' max-sm:px-1 max-sm:w-12';

  return (
    <div
      id='menu'
      className='fixed z-30 w-full h-full bg-dark-white dark:bg-menu-back justify-center items-top duration-700'>
      <div className='flex flex-col mt-52 z-50 px-[10%]'>
        <button
          className={
            'flex flex-row z-30 fixed top-24 right-24 items-center px-4 py-2 bg-menu-back-button text-dark-blue hover:text-menu-button hover:bg-dark-blue fill-dark-blue rounded-lg ' +
            TABLET_BTN +
            MOBILE_BTN
          }
          onClick={() => fun()}>
          <div className='flex flex-row items-center space-x-2 max-xl:space-x-2 max-sm:space-x-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 28 28'
              className='max-xl:h-6 max-sm:ms-1.5'
              fill='none'>
              <path
                d='M13.9999 15.6333L8.28327 21.35C8.06938 21.5639 7.79716 21.6708 7.4666 21.6708C7.13605 21.6708 6.86382 21.5639 6.64993 21.35C6.43605 21.1361 6.3291 20.8639 6.3291 20.5333C6.3291 20.2028 6.43605 19.9306 6.64993 19.7167L12.3666 14L6.64993 8.28333C6.43605 8.06944 6.3291 7.79722 6.3291 7.46666C6.3291 7.13611 6.43605 6.86388 6.64993 6.65C6.86382 6.43611 7.13605 6.32916 7.4666 6.32916C7.79716 6.32916 8.06938 6.43611 8.28327 6.65L13.9999 12.3667L19.7166 6.65C19.9305 6.43611 20.2027 6.32916 20.5333 6.32916C20.8638 6.32916 21.136 6.43611 21.3499 6.65C21.5638 6.86388 21.6708 7.13611 21.6708 7.46666C21.6708 7.79722 21.5638 8.06944 21.3499 8.28333L15.6333 14L21.3499 19.7167C21.5638 19.9306 21.6708 20.2028 21.6708 20.5333C21.6708 20.8639 21.5638 21.1361 21.3499 21.35C21.136 21.5639 20.8638 21.6708 20.5333 21.6708C20.2027 21.6708 19.9305 21.5639 19.7166 21.35L13.9999 15.6333Z'
                fill='#E0E3ED'
              />
            </svg>

            <p className='text-lg font-medium text-dark-white max-xl:text-base max-sm:collapse'>
              CLOSE
            </p>
          </div>
        </button>
        <div className='flex flex-row self-center mt-18 z-30 gap-40 max-xl:gap-20 max-sm:gap-5 text-dark-white text-2xl text-medium max-xl:text-xl max-sm:text-sm'>
          <Link href='#about'>
            <p
              className='text-black dark:text-dark-white dark:hover:text-white duration-300'
              onClick={(e) => fun()}>
              About
            </p>
          </Link>
          <Link href='#skills'>
            <p
              className='text-black dark:text-dark-white dark:hover:text-white duration-300'
              onClick={(e) => fun()}>
              Skills
            </p>
          </Link>

          <Link href='#experience'>
            <p
              className='text-black dark:text-dark-white dark:hover:text-white duration-300'
              onClick={(e) => fun()}>
              Experience
            </p>
          </Link>
          <Link href='#portfolio'>
            <p
              className='text-black dark:text-dark-white dark:hover:text-white duration-300'
              onClick={(e) => fun()}>
              Portfolio
            </p>
          </Link>
        </div>
        <HomeFooter isFooter={false} />
      </div>

      <div className='el-wrap z-0 x'>
        <div className='el y'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='500'
            height='500'
            viewBox='0 0 795 795'
            className='rounded-full blur-2xl z-0'
            fill='none'>
            <g filter='url(#filter0_f_727_81)'>
              <circle
                cx='397.5'
                cy='397.5'
                r='97.5'
                fill='#F17A59'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_727_81'
                x='0'
                y='-0.00012207'
                width='795'
                height='795'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood
                  floodOpacity='0'
                  result='BackgroundImageFix'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='150'
                  result='effect1_foregroundBlur_727_81'
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className='fixed top-0 z-0 el-wrap x'>
        <div className='el y'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='400'
            height='400'
            viewBox='0 0 795 795'
            className='rounded-full blur-2xl z-0'
            fill='none'>
            <g filter='url(#filter0_f_727_79)'>
              <circle
                cx='397.5'
                cy='397.5'
                r='97.5'
                fill='#7568C8'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_727_79'
                x='0'
                y='-0.00012207'
                width='795'
                height='795'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood
                  floodOpacity='0'
                  result='BackgroundImageFix'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='150'
                  result='effect1_foregroundBlur_727_79'
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className='fixed bottom-96 z-0 right-96 el-wrap x'>
        <div className='el y'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='350'
            height='350'
            viewBox='0 0 795 795'
            className='rounded-full blur-2xl z-0'
            fill='none'>
            <g filter='url(#filter0_f_727_80)'>
              <circle
                cx='397.5'
                cy='397.5'
                r='97.5'
                fill='#4EB99D'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_727_80'
                x='0'
                y='-0.00012207'
                width='795'
                height='795'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood
                  floodOpacity='0'
                  result='BackgroundImageFix'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='150'
                  result='effect1_foregroundBlur_727_80'
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
