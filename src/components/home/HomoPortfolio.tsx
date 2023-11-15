'use client';

import { useState } from 'react';

const SkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full bg-skill-bubble-back mx-1 my-2'>
      <p className='text-base px-4 py-1 text-white max-xl:text-sm'>{text}</p>
    </div>
  );
};

const CarouselItem = ({ data }: { data: PortfolioData }) => {
  return (
    <div className='flex flex-row gap-x-16'>
      <div className='flex flex-col shrink-0'>
        <img
          src={data.image}
          className='w-auto h-auto max-h-[400px] max-w-[500px] aspect-auto shrink-0 max-xl:max-w-[250px] max-xl:max-h-[250px]'
          alt='Picture of the port'
        />
      </div>

      <div className='flex flex-col gap-y-5'>
        <h1 className='text-purple text-2xl font-medium max-xl:text-xl'>
          {data.title}
        </h1>
        <h2 className='text-dark-white text-xl font-medium max-xl:text-lg'>
          {data.tech}
        </h2>
        <p className='text-dark-white text-base font-normal max-xl:text-sm'>
          {data.desc}
        </p>

        <div className='flex flex-wrap'>
          {data.skills.map((item, idx) => {
            return (
              <SkillBubbleItem
                text={item}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type PortfolioData = {
  title: string;
  tech: string;
  desc: string;
  image: string;
  skills: string[];
};

export const HomePortfolio = () => {
  const data: PortfolioData[] = [
    {
      title: 'Uplift Prayer',
      tech: 'iOS / Android / NodeJS',
      desc: 'Developing and maintaining the mobile apps Uplift Prayer (social network for church communities) and establishing a backend server that has 400+ requests, from the grounds up for 6 years.',
      image: '/port_uplift.png',
      skills: [
        'Kotlin',
        'Java',
        'Swift',
        'UIKit',
        'JavaScript',
        'MongoDB',
        'Firebase',
      ],
    },
    {
      title: 'Loop',
      tech: 'iOS / NodeJS',
      desc: 'Proximity based social network, that transforms physical objects and interactions to digital by using NFC based technology.',
      image: '/port_cuemill.png',
      skills: [
        'Swift',
        'SwiftUI',
        'Combine',
        'Callkit',
        'JavaScript',
        'Socket.io',
        'WebRTC',
      ],
    },
    {
      title: 'Binit!',
      tech: 'Android / iOS / FastAPI (python)',
      desc: 'Garbage sorting tool for waste managment companies and recycle driven communities.',
      image: '/port_binit.png',
      skills: [
        'Swift',
        'SwiftUI',
        'Kotlin',
        'Jetpack Compose',
        'Python',
        'PostgreSQL',
      ],
    },
    {
      title: 'Grocery shop delivery',
      tech: 'Android / iOS',
      desc: 'App for ordering fresh fruits and vegetables from a local shop.',
      image: '/port_grocery.png',
      skills: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'],
    },
    {
      title: 'Crypton',
      tech: 'iOS / Android',
      desc: 'Mobile crypto wallet built on ETH Blockchain',
      image: '/port_crypto_mob.png',
      skills: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Solidity'],
    },
    {
      title: 'Crypton WEB',
      tech: 'React / Redux',
      desc: 'Web crypto wallet built on ETH Blockchain',
      image: '/port_crypto_site.png',
      skills: ['Javascript', 'React', 'Redux', 'Solidity'],
    },
    {
      title: 'Web developer portfolio',
      tech: 'JS / React',
      desc: 'Cozy portfolio website for an aspiring web developer',
      image: '/port_port_web.png',
      skills: ['Javascript', 'React'],
    },
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-16'>
            Portfolio
          </h2>
          <div className='flex flex-col w-full'>
            <div className='flex h-96 carousel-container max-xl:h-80'>
              <CarouselItem data={data[current]} />
            </div>

            <div className='flex flex-row justify-start gap-x-5 mt-8 ms-32 max-xl:ms-16'>
              <button onClick={previousSlide}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'>
                  <path
                    d='M11.25 26.25L5 20M5 20L11.25 13.75M5 20H35'
                    stroke='#E0E3ED'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button onClick={nextSlide}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='41'
                  viewBox='0 0 40 41'
                  fill='none'>
                  <path
                    d='M28.75 26.8452L35 20.5952M35 20.5952L28.75 14.3452M35 20.5952H5'
                    stroke='#E0E3ED'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
