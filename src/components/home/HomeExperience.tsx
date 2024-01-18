'use client';

import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

const WorkPlaceItem = ({
  item,
  color,
}: {
  item: CategoryData;
  color: string;
}) => {
  return (
    <div className='flex flex-col w-full max-sm:mb-14'>
      <div className='flex flex-wrap'>
        <p className='text-dark-white text-2xl font-medium max-lg:text-lg max-sm:text-base'>
          {item.title}
        </p>
        <p
          className={
            `text-${color} ` +
            'text-2xl font-medium ml-3 max-lg:text-lg max-sm:text-base'
          }>
          {item.place}
        </p>
      </div>

      <p className='text-dark-white text-xl pt-3 max-lg:text-lg max-sm:text-sm'>
        {`${item.year}, ${item.country}`}
      </p>

      <p className='text-dark-white text-xl pt-3 max-lg:text-lg max-sm:text-sm'>
        {item.desc}
      </p>

      {item.resposo.map((txt, idx) => {
        return (
          <div
            key={idx}
            className='flex flex-row mt-3 gap-x-5'>
            <svg
              className='shrink-0'
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

            <p className='text-dark-white text-lg max-sm:text-xs'>{txt}</p>
          </div>
        );
      })}
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
    'text-2xl text-start pb-7 max-lg:text-lg max-sm:text-base ';
  const CATEGORY_SELECTED: string = 'text-purple';
  const CATEGORY_DEFAULT: string = 'text-dark-white';

  const colors = ['purple', 'orange', 'green'];

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
      title: 'Senior Android developer',
      place: '@OpenText',
      year: '2024 - Present',
      country: 'Canada (On-site)',
      desc: 'Enterprise information management solutions encompassing content and business process management, information exchange, customer experience, analytics, and cyber resilience',
      resposo: ['Developing a native Android apps '],
    },
    {
      title: 'iOS developer',
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
          <h2 className='text-menu-button text-2xl max-sm:text-lg font-bold max-xl:pb-10'>
            Experience
          </h2>

          {isMobile ? (
            <div className='flex flex-col collapse max-sm:visible'>
              {categoryData.map((item, i) => {
                return (
                  <WorkPlaceItem
                    item={item}
                    key={i}
                    color={colors[Math.floor(Math.random() * colors.length)]}
                  />
                );
              })}
            </div>
          ) : (
            <div className='flex flex-row gap-x-20 max-sm:collapse'>
              <div className='flex flex-row gap-x-5 h-[300px] ps-28 max-xl:ps-0'>
                <div className='h-auto w-0.5 bg-dark-white'>
                  <div
                    className={
                      'h-16 w-1 bg-purple relative ' +
                      getSliderPosition(category)
                    }></div>
                </div>
                <div className='flex flex-col pt-4'>
                  <button onClick={() => selectCategory(0)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 0 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      OpenText
                    </p>
                  </button>
                  <button onClick={() => selectCategory(1)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 1 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Cuemill
                    </p>
                  </button>
                  <button onClick={() => selectCategory(2)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 2 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Uplift Prayer
                    </p>
                  </button>
                  <button onClick={() => selectCategory(3)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 3 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Starlet
                    </p>
                  </button>
                  <button onClick={() => selectCategory(4)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 4 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Computools
                    </p>
                  </button>
                  <button onClick={() => selectCategory(5)}>
                    <p
                      className={
                        BASE_FONT_STYLE +
                        (category == 5 ? CATEGORY_SELECTED : CATEGORY_DEFAULT)
                      }>
                      Education
                    </p>
                  </button>
                </div>
              </div>
              <div className='flex-1'>
                <WorkPlaceItem
                  item={categoryData[category]}
                  color='purple'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  function getSliderPosition(idx: number) {
    switch (idx) {
      case 0:
        return '';
        break;
      case 1:
        return 'inset-y-[60px]';
        break;
      case 2:
        return 'inset-y-[120px]';
        break;
      case 3:
        return 'inset-y-[180px]';
        break;
      case 4:
        return 'inset-y-[240px]';
        break;
      default:
        return '';
        break;
    }
  }
};
