import Tooltip from './Tooltip';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type SkillItem = {
  title: string;
  years: number;
};

const HomeSkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full bg-dark-white hover:bg-metal dark:bg-skill-bubble-back dark:hover:bg-dark-blue mx-1 my-2'>
      <p className='text-lg px-5 py-2 text-black hover:text-white dark:text-white max-sm:text-xs'>
        {text}
      </p>
    </div>
  );
};

const HomeSkillListItem = ({
  type,
  color,
  list,
}: {
  type: string;
  color: string;
  list: Array<SkillItem>;
}) => {
  return (
    <div className='flex flex-col mb-5'>
      <h1 className={'text-2xl max-sm:text-xl ' + ' text-' + color}>{type}</h1>
      <div className='flex flex-wrap'>
        {list.map((item, i) => {
          return (
            <Tooltip
              key={i}
              message={`${item.years} ${
                item.years > 1 ? 'years' : 'year'
              } experience`}>
              <HomeSkillBubbleItem
                text={item.title}
                key={i}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export const HomeSkills = () => {
  const MAIN_TABLET: string = 'max-xl:flex-col max-xl:space-x-0';
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

  return (
    <section
      id='skills'
      className={`container pt-72 max-sm:pt-32 max-sm:w-[350px] ${
        doAnimation === true || isMobile
          ? 'visible ' + ANIMATION_STYLE
          : 'invisible'
      }`}
      ref={ref}>
      <div className='justify-self-center'>
        <div
          className={`flex flex-row justify-between justify-self-center space-x-36 ${MAIN_TABLET}`}>
          <h2 className='min-w-max text-black dark:text-menu-button text-2xl font-bold max-xl:pb-10 max-sm:text-xl'>
            Skills & Tools
          </h2>
          <div className='flex flex-col'>
            <HomeSkillListItem
              type='Android'
              color='purple'
              list={[
                { title: 'Java', years: 7 },
                { title: 'Kotlin', years: 6 },
                { title: 'SQLite', years: 5 },
                { title: 'Realm', years: 2 },
                { title: 'Room', years: 3 },
                { title: 'Jetpack Compose', years: 3 },
                { title: 'Hilt', years: 2 },
                { title: 'Firebase', years: 6 },
                { title: 'Retrofit', years: 8 },
              ]}
            />

            <HomeSkillListItem
              type='iOS'
              color='green'
              list={[
                { title: 'Swift', years: 7 },
                { title: 'SwiftUI', years: 2 },
                { title: 'UIKit', years: 6 },
                { title: 'MVVM', years: 5 },
                { title: 'CoreData', years: 4 },
                { title: 'Alamofire', years: 6 },
                { title: 'Combine', years: 2 },
                { title: 'WebRTC', years: 1 },
                { title: 'socket.io', years: 3 },
                { title: 'Callkit', years: 1 },
                { title: 'Push notifications', years: 5 },
              ]}
            />

            <HomeSkillListItem
              type='Backend'
              color='orange'
              list={[
                { title: 'JavaScript', years: 5 },
                { title: 'NodeJS', years: 5 },
                { title: 'MongoDB', years: 5 },
                { title: 'Express', years: 5 },
                { title: 'Mongoose', years: 5 },
                { title: 'Python', years: 4 },
                { title: 'Postgres', years: 1 },
                { title: 'FastAPI', years: 3 },
                { title: 'Sqlalchemy', years: 1 },
              ]}
            />

            <HomeSkillListItem
              type='Frontend'
              color='purple'
              list={[
                { title: 'React', years: 2 },
                { title: 'Redux', years: 2 },
                { title: 'NextJS', years: 1 },
                { title: 'Handlebars', years: 1 },
                { title: 'TypeScript', years: 1 },
                { title: 'jQuery', years: 1 },
                { title: 'Tailwind', years: 1 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
