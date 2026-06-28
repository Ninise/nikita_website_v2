'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full border border-black/20 dark:border-white/20 hover:border-green hover:text-green mx-1 my-1.5 transition-colors duration-200'>
      <p className='text-sm px-4 py-1 text-black dark:text-white max-xl:text-sm max-sm:text-xs'>
        {text}
      </p>
    </div>
  );
};

const CarouselItem = ({ data }: { data: PortfolioData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <div className='flex flex-row gap-x-16 max-sm:flex-col'>
      {isMobile ? (
        <div></div>
      ) : (
        <div className='flex flex-col shrink-0'>
          <img
            src={data.image}
            className='w-auto h-auto max-h-[380px] max-w-[380px] aspect-auto shrink-0 max-xl:max-w-[220px] max-xl:max-h-[220px]'
            alt='Picture of the port'
          />
        </div>
      )}

      <div className='flex flex-col gap-y-5 min-w-0'>
        <h1 className='text-black dark:text-white text-2xl font-bold max-xl:text-xl'>
          {data.title}
        </h1>
        <h2 className='text-black/40 dark:text-white/40 text-base font-medium max-xl:text-sm'>
          {data.tech}
        </h2>
        <div className='flex flex-col gap-3'>
          {data.desc.split('\n\n').map((block, i) => (
            <p
              key={i}
              className={`text-base max-xl:text-sm ${
                i === 0
                  ? 'text-black/60 dark:text-white/60'
                  : 'text-black dark:text-white font-medium'
              }`}
            >
              {block}
            </p>
          ))}
        </div>

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

        {isMobile ? (
          <div className='flex flex-col shrink-0'>
            <img
              src={data.image}
              className='w-auto h-auto max-h-[400px] max-w-[500px] aspect-auto shrink-0 max-xl:max-w-[250px] max-xl:max-h-[250px] max-sm:max-w-[350px] max-sm:max-h-[350px]'
              alt='Picture of the port'
            />
          </div>
        ) : (
          <div></div>
        )}
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
      tech: 'iOS · Android · NodeJS',
      desc: 'Sole mobile engineer for 6 years. Built iOS + Android social apps and the backend from scratch. 400+ API endpoints. Still running.\n\nWhat this means for you: I can own the whole technical picture, not just one layer.',
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
      tech: 'iOS · NFC · WebRTC · NodeJS',
      desc: 'Founding engineer on a proximity social network. Built the iOS app with NFC integration, real-time messaging, and WebRTC video calls — all from scratch.\n\nWhat this means for you: I\'ve been the first engineer before. I know what to build, what to defer, and how to move fast without making a mess.',
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
      tech: 'iOS · Android · Python · ML',
      desc: 'Full-stack mobile app with AI-powered waste classification. iOS + Android frontends, Python/FastAPI backend, and ML classification — one engineer, one coherent product.\n\nWhat this means for you: I can connect mobile, backend, and AI in a single build when you need someone who doesn\'t drop the baton.',
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
      title: 'Grocery Delivery',
      tech: 'iOS · Android',
      desc: 'iOS and Android delivery app shipped for a local business. Native UX on both platforms, scoped tightly to what the product actually needed.\n\nWhat this means for you: I know how to right-size a solution. Not every problem needs a $200K architecture.',
      image: '/port_grocery.png',
      skills: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'],
    },
    {
      title: 'Crypton',
      tech: 'iOS · Android · Solidity',
      desc: 'Mobile Ethereum wallet on iOS and Android with on-chain smart contract integration.\n\nWhat this means for you: I can operate in high-stakes, regulated domains — fintech, crypto, compliance — without needing someone else to hold my hand.',
      image: '/port_crypto_mob.png',
      skills: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Solidity'],
    },
  ];

  let [current, setCurrent] = useState(0);
  let [prev, setPrev] = useState(0);

  let previousSlide = () => {
    setPrev(current);
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    setPrev(current);
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the threshold as needed
    };

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  const ANIMATION_STYLE: string = 'animate-fade-down animate-duration-[2000ms]';

  const [doAnimation, setDoAnimation] = useState(false);

  const { ref, inView, entry } = useInView({
    rootMargin: '-400px',
    threshold: 0,
    onChange(inView, entry) {
      if (inView) {
        setDoAnimation(true);
      }
    },
  });

  return (
    <section
      id='portfolio'
      className={`container pt-72 max-sm:pt-32 max-sm:w-[350px] ${
        doAnimation === true || isMobile
          ? 'visible ' + ANIMATION_STYLE
          : 'invisible'
      }`}
      ref={ref}>
      <div className='w-full'>
        <div className='flex max-xl:flex-col flex-row gap-24 max-xl:gap-12'>
          <div className='flex flex-col gap-3 shrink-0 max-xl:pb-0'>
            <div className='w-8 h-0.5 bg-black dark:bg-white'></div>
            <h2 className='min-w-max text-black dark:text-white text-sm font-medium tracking-widest uppercase'>
              Portfolio
            </h2>
          </div>
          <div className='flex flex-row items-center gap-6 flex-1 min-w-0'>
            <div
              className={`flex carousel-container flex-1 min-w-0 h-[500px] max-xl:h-[450px] max-sm:h-auto ${
                current % 2
                  ? 'animate-fade'
                  : 'animate-pulse animate-duration-200 animate-once'
              }`}>
              <CarouselItem data={data[current]} />
            </div>

            <button
              onClick={nextSlide}
              className='text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0'>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 18l6-6-6-6' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
