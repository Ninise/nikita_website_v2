'use client';

import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

const WorkPlaceItem = ({ item }: { item: CategoryData }) => {
  return (
    <div className='flex flex-col w-full max-sm:mb-14'>
      <div className='flex flex-wrap items-baseline gap-x-2'>
        <p className='text-black dark:text-white text-2xl font-medium max-lg:text-lg max-sm:text-base'>
          {item.title}
        </p>
        <p className='text-green text-2xl font-medium max-lg:text-lg max-sm:text-base'>
          {item.place}
        </p>
      </div>

      <p className='text-black/40 dark:text-white/40 text-base pt-2 max-sm:text-sm'>
        {`${item.year} · ${item.country}`}
      </p>

      <p className='text-black/60 dark:text-white/60 text-lg pt-4 max-lg:text-base max-sm:text-sm'>
        {item.desc}
      </p>

      <div className='flex flex-col gap-2 mt-4'>
        {item.resposo.map((txt, idx) => (
          <div key={idx} className='flex flex-row gap-4'>
            <span className='text-green text-sm shrink-0 mt-0.5'>→</span>
            <p className='text-black/70 dark:text-white/70 text-base max-sm:text-sm'>
              {txt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

type CategoryData = {
  title: string;
  place: string;
  year: string;
  country: string;
  desc: string;
  resposo: Array<String>;
};

export const HomeExperience = () => {
  const BASE_FONT_STYLE: string =
    'text-lg text-start pb-6 max-lg:text-base max-sm:text-sm ';
  const CATEGORY_SELECTED: string = 'text-black dark:text-white font-medium';
  const CATEGORY_DEFAULT: string = 'text-black/30 dark:text-white/30';

  const [category, setCategory] = useState(0);

  const selectCategory = (idx: number) => setCategory(idx);

  const ANIMATION_STYLE: string = 'animate-fade-down animate-duration-[2000ms]';

  const [doAnimation, setDoAnimation] = useState(false);

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

  const { ref, inView, entry } = useInView({
    rootMargin: `${isMobile ? '-400px' : ''}`,
    threshold: 0,
    onChange(inView, entry) {
      if (inView) {
        setDoAnimation(true);
      }
    },
  });

  const categoryData: CategoryData[] = [
    {
      title: 'Senior Mobile Engineer',
      place: '@Intuit',
      year: '2025 - Present',
      country: 'Mountain View, CA',
      desc: 'Intuit is a $75B financial software company behind TurboTax, QuickBooks, and Credit Karma — serving over 100M customers globally.',
      resposo: [
        'Building mobile products at scale across a multi-product platform;',
        'Operating at Staff Engineer scope — architecture reviews, cross-team standards, technical direction;',
        'Working within fintech compliance and security constraints on consumer-facing apps;',
      ],
    },
    {
      title: 'AI Developer',
      place: '@OpenText',
      year: '2024 - 2025',
      country: 'Canada (On-site)',
      desc: 'Enterprise secured content management company. Worked in a backend/AI role building LLM-powered tooling on top of the OpenText platform.',
      resposo: [
        'Built AI agents and prompt engineering pipelines for enterprise content workflows;',
        'Developed backend tools and integrations in a secured, compliance-driven environment;',
        'Worked with LLMs in production — tool use, structured outputs, agent orchestration;',
      ],
    },
    {
      title: 'Founding Engineer',
      place: '@Cuemill',
      year: '2023 - 2023',
      country: 'Canada (On-site)',
      desc: 'Proximity based social network, that transforms physical objects and interactions to digital by using NFC based technology.',
      resposo: [
        'Developed a native iOS app in a proximity-enhancing technology startup;',
        'Utilized NFC chips and technologies like Swift, SwiftUI, socket.io, and WebRTC;',
        'Amplified conversations with messaging chats and Voice/Video calls, CallKit included;',
        'Contributed to Web development, VanillaJS, Handlebars and NodeJS;',
      ],
    },
    {
      title: 'Mobile developer',
      place: '@Uplift Prayer',
      year: '2017 - 2023',
      country: 'USA (Remote)',
      desc: 'Social network for church communities with a goal to connect people in prayer.',
      resposo: [
        'Developed a server using NodeJS, Express, and MongoDB;',
        'Created native iOS (Swift/UIKit) and Android (Java/Kotlin) apps;',
        'Set up a cloud environment for a backend (Ubuntu/DigitalOcean);',
        'Integrated Analytics / Ads / Push notifications (Google);',
      ],
    },
    {
      title: 'Mobile developer, CEO',
      place: '@Starlet',
      year: '2017 - 2019',
      country: 'Ukraine',
      desc: 'A digital agency that were providing its experience in mobile development.',
      resposo: [
        'Managed company of 6 people;',
        'Involved in direct sales;',
        'Worked as a native iOS (Swift) and Android (Java) developer;',
        'Mainly worked with startups but also contributed in a big EU enterprise company;',
      ],
    },
    {
      title: 'Android developer',
      place: '@Computools',
      year: '2016 - 2017',
      country: 'Ukraine (On-site)',
      desc: 'An outsource company that provides a full development life-cycle in web/mobile development.',
      resposo: [
        'Worked as an Android developer;',
        'Participated in a team of 9 developers;',
        'Learned Agile methodologies and SCRUM management.;',
        'Mastered Java and custom UI development.;',
      ],
    },
    {
      title: 'Studied Software Engineering',
      place: '@ZIEIT',
      year: '2013 - 2017',
      country: 'Ukraine',
      desc: 'Graduated as a bachelor of Software engineering and learned things like:',
      resposo: [
        'Designing and maintaining software systems;',
        'Evaluating and testing new software programs;',
        'Optimizing software for speed and scalability;',
        'Writing and testing code;',
        'Consulting with clients, engineers, security specialists, and other stakeholders;',
      ],
    },
  ];

  return (
    <section
      id='experience'
      className={`container pt-72 max-sm:w-[350px] max-sm:pt-32 ${
        doAnimation === true || isMobile
          ? 'visible ' + ANIMATION_STYLE
          : 'invisible'
      }`}
      ref={ref}>
      <div className='justify-self-center'>
        <div className='flex flex-row justify-start space-x-8 max-xl:space-x-0 max-xl:flex-col'>
          <div className='flex flex-col gap-3 max-xl:pb-10'>
            <div className='w-8 h-0.5 bg-black dark:bg-white'></div>
            <h2 className='min-w-max text-black dark:text-white text-sm font-medium tracking-widest uppercase'>
              Experience
            </h2>
          </div>

          {isMobile ? (
            <div className='flex flex-col collapse max-sm:visible'>
              {categoryData.map((item, i) => (
                <WorkPlaceItem item={item} key={i} />
              ))}
            </div>
          ) : (
            <div className='flex flex-row gap-x-20 max-sm:collapse w-full'>
              <div className='flex flex-row gap-x-5 h-[420px] ps-28 max-xl:ps-0 shrink-0'>
                <div className='h-auto w-0.5 bg-black/10 dark:bg-white/10'>
                  <div
                    className='glow-line h-16 w-1 bg-green relative rounded-full transition-all duration-300'
                    style={{ top: `${category * 52}px` }}></div>
                </div>
                <div className='flex flex-col pt-4'>
                  <button onClick={() => selectCategory(0)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 0 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Intuit
                    </p>
                  </button>
                  <button onClick={() => selectCategory(1)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 1 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      OpenText
                    </p>
                  </button>
                  <button onClick={() => selectCategory(2)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 2 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Cuemill
                    </p>
                  </button>
                  <button onClick={() => selectCategory(3)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 3 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Uplift Prayer
                    </p>
                  </button>
                  <button onClick={() => selectCategory(4)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 4 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Starlet
                    </p>
                  </button>
                  <button onClick={() => selectCategory(5)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 5 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Computools
                    </p>
                  </button>
                  <button onClick={() => selectCategory(6)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 6 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Education
                    </p>
                  </button>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <WorkPlaceItem item={categoryData[category]} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

};
