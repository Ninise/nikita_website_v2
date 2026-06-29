'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const OfferItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className='glow-border flex flex-col gap-2 py-8 px-4 -mx-4 border-b border-black/10 dark:border-white/10 hover:border-transparent transition-colors duration-500 last:border-0'>
      <h3 className='text-3xl font-bold text-black dark:text-white max-xl:text-2xl max-sm:text-xl'>
        {title}
      </h3>
      <p className='text-black/50 dark:text-white/50 text-lg max-sm:text-base'>{desc}</p>
    </div>
  );
};

export const HomeAbout = () => {
  const ANIMATION_STYLE = 'animate-fade-down animate-duration-[2000ms]';
  const [doAnimation, setDoAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => setIsMobile(window.innerWidth <= 600);
    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);
    return () => window.removeEventListener('resize', checkWindowWidth);
  }, []);

  const { ref } = useInView({
    rootMargin: `${isMobile ? '-400px' : ''}`,
    threshold: 0,
    onChange(inView) {
      if (inView) setDoAnimation(true);
    },
  });

  return (
    <section
      id='about'
      className={`pt-48 max-sm:pt-32 ${doAnimation || isMobile ? 'visible ' + ANIMATION_STYLE : 'invisible'}`}
      ref={ref}>
      <div className='flex max-xl:flex-col flex-row gap-24 max-xl:gap-12'>
        <div className='flex flex-col gap-3 shrink-0 pt-8 max-xl:pt-0'>
          <div className='w-8 h-0.5 bg-black dark:bg-white'></div>
          <h2 className='min-w-max text-black dark:text-white text-sm font-medium tracking-widest uppercase'>
            About Me
          </h2>
        </div>

        <div className='flex flex-col w-full'>
          <p className='text-black dark:text-white text-xl max-sm:text-base mb-2'>
            Hi, I&apos;m Nikita. Based in San Francisco Bay Area, California.
          </p>
          <p className='text-black/50 dark:text-white/50 text-xl max-sm:text-base mb-10'>
            10 years across fintech, enterprise, and startups — both building and advising.
          </p>

          <div>
            <OfferItem
              title='Architecture advice'
              desc='I help founders make the right mobile stack decisions early, before they become expensive to undo.'
            />
            <OfferItem
              title='Hands-on building'
              desc='I can join as a fractional CTO or lead engineer to ship your iOS/Android MVP alongside your team.'
            />
            <OfferItem
              title='Broad depth'
              desc='10 years across fintech (Intuit), enterprise security (OpenText), and startups — I understand compliance constraints, secure architecture, and AI tooling, not just mobile.'
            />
            <OfferItem
              title='Scale experience'
              desc="I've seen what breaks at scale and what never should have been built that way. I help startups make technical decisions today that won't become expensive regrets at Series A."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
