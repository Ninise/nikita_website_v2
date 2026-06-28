'use client';

import Tooltip from './Tooltip';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type SkillItem = {
  title: string;
  years: number;
};

const HomeSkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full border border-black/20 dark:border-white/20 hover:border-green hover:text-green mx-1 my-1.5 transition-colors duration-200 cursor-default'>
      <p className='text-sm px-4 py-1.5 text-black dark:text-white max-sm:text-xs'>
        {text}
      </p>
    </div>
  );
};

const HomeSkillListItem = ({
  type,
  list,
}: {
  type: string;
  list: Array<SkillItem>;
}) => {
  return (
    <div className='flex flex-col mb-8'>
      <p className='text-black/40 dark:text-white/40 text-xs font-medium tracking-widest uppercase mb-3'>
        {type}
      </p>
      <div className='flex flex-wrap -mx-1'>
        {list.map((item, i) => (
          <Tooltip
            key={i}
            message={`${item.years} ${item.years > 1 ? 'years' : 'year'} experience`}>
            <HomeSkillBubbleItem text={item.title} />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export const HomeSkills = () => {
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
      id='skills'
      className={`pt-48 max-sm:pt-32 ${doAnimation || isMobile ? 'visible ' + ANIMATION_STYLE : 'invisible'}`}
      ref={ref}>
      <div className='flex max-xl:flex-col flex-row gap-24 max-xl:gap-12'>
        <div className='flex flex-col gap-3 shrink-0 pt-2 max-xl:pt-0'>
          <div className='w-8 h-0.5 bg-black dark:bg-white'></div>
          <h2 className='min-w-max text-black dark:text-white text-sm font-medium tracking-widest uppercase'>
            Skills & Tools
          </h2>
        </div>

        <div className='flex flex-col w-full'>
          <HomeSkillListItem
            type='iOS'
            list={[
              { title: 'Swift', years: 7 },
              { title: 'SwiftUI', years: 2 },
              { title: 'UIKit', years: 6 },
              { title: 'Combine', years: 2 },
              { title: 'WebRTC', years: 1 },
              { title: 'CallKit', years: 1 },
            ]}
          />
          <HomeSkillListItem
            type='Android'
            list={[
              { title: 'Kotlin', years: 6 },
              { title: 'Java', years: 7 },
              { title: 'Jetpack Compose', years: 3 },
              { title: 'Room', years: 3 },
              { title: 'Firebase', years: 6 },
            ]}
          />
          <HomeSkillListItem
            type='AI & LLM'
            list={[
              { title: 'Prompt Engineering', years: 2 },
              { title: 'Tool Use', years: 2 },
              { title: 'Agent Orchestration', years: 1 },
              { title: 'LangChain', years: 1 },
              { title: 'LangGraph', years: 1 },
              { title: 'ML Classification', years: 2 },
            ]}
          />
          <HomeSkillListItem
            type='Backend'
            list={[
              { title: 'Python', years: 4 },
              { title: 'FastAPI', years: 3 },
              { title: 'Node.js', years: 3 },
              { title: 'Express', years: 5 },
              { title: 'MongoDB', years: 5 },
              { title: 'PostgreSQL', years: 3 },
            ]}
          />
          <HomeSkillListItem
            type='Frontend'
            list={[
              { title: 'React', years: 2 },
              { title: 'Next.js', years: 1 },
              { title: 'TypeScript', years: 3 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
