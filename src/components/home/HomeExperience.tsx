'use client';

import { useState } from 'react';

type CategoryData = {
  title: string;
  place: string;
  year: string;
  country: string;
  desc: string;
  resposo: Array<String>;
};

export const HomeExperience = () => {
  const BASE_FONT_STYLE: string = 'text-2xl text-start pb-7 ';
  const CATEGORY_SELECTED: string = 'text-purple';
  const CATEGORY_DEFAULT: string = 'text-dark-white';

  const [category, setCategory] = useState(0);

  const selectCategory = (idx: number) => setCategory(idx);

  const categoryData: CategoryData[] = [
    {
      title: 'Lead iOS developer',
      place: '@Cuemill',
      year: '2023 - Present',
      country: 'Canada',
      desc: 'Developing and maintaining the iOS app (social network for community) from the grounds up:',
      resposo: ['created architecture'],
    },
  ];

  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10'>
            Experience
          </h2>
          <div className='flex flex-col'>
            <button onClick={() => selectCategory(0)}>
              <p
                className={
                  BASE_FONT_STYLE +
                  (category == 0 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                }>
                Cuemill
              </p>
            </button>
            <button onClick={() => selectCategory(1)}>
              <p
                className={
                  BASE_FONT_STYLE +
                  (category == 1 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                }>
                Uplift Prayer
              </p>
            </button>
            <button onClick={() => selectCategory(2)}>
              <p
                className={
                  BASE_FONT_STYLE +
                  (category == 2 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                }>
                Starlet
              </p>
            </button>
            <button onClick={() => selectCategory(3)}>
              <p
                className={
                  BASE_FONT_STYLE +
                  (category == 3 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                }>
                Computools
              </p>
            </button>
            <button onClick={() => selectCategory(4)}>
              <p
                className={
                  BASE_FONT_STYLE +
                  (category == 4 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                }>
                Education
              </p>
            </button>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <p className='text-dark-white text-2xl font-medium'>
                Lead iOS developer
              </p>
              <p className='text-purple text-2xl font-medium ml-3'>@Cuemill</p>
            </div>

            <p className='text-dark-white text-xl pt-3'>
              2023 - Present, Toronto, Canada
            </p>

            <p className='text-dark-white text-xl pt-3'>
              Developing and maintaining the iOS app (social network for
              community) from the grounds up:
            </p>

            <div className='flex flex-row mt-3 gap-x-5'>
              <svg
                width='15'
                height='28'
                viewBox='0 0 15 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g id='icon'>
                  <path
                    id='&#62;'
                    d='M11.7443 15.3807L3 19.4205V17.1513L9.21307 14.4858L9.14276 14.6072V14.3132L9.21307 14.4347L3 11.7692V9.5L11.7443 13.5398V15.3807Z'
                    fill='#4EB99D'
                  />
                </g>
              </svg>

              <p className='text-dark-white text-lg'>created architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
