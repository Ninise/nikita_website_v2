import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HomeAboutItem = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-row space-x-5'>
      <p className='text-green text-lg max-sm:text-sm'>&lt;</p>
      <p className={'text-menu-button text-lg max-sm:text-sm'}>{text}</p>
    </div>
  );
};

export const HomeAbout = () => {
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
      id='about'
      className={`container pt-72 max-sm:w-[350px] ${
        doAnimation === true || isMobile
          ? 'visible ' + ANIMATION_STYLE
          : 'invisible'
      }`}
      ref={ref}>
      <div className='justify-self-center max-sm:items-start'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10 max-sm:text-xl'>
            About Me
          </h2>
          <div className='flex flex-col'>
            <h2 className='text-green text-2xl font-bold max-sm:text-lg'>
              Hi, I’m Nikita
            </h2>
            <h2 className='text-green text-2xl font-bold mt-1 max-sm:text-lg'>
              Software Developer, based in Toronto
            </h2>

            <div className='flex scroll-container bg-scroll-text-back h-8 my-6 max-xl:w-[600px] max-sm:w-[340px]'>
              <div className='flex scroll-text items-center'>
                <p className='justify-self-center truncate'>
                  / 7 years / 31 project / 24/7 support / 7 years / 31 project /
                  24/7 support
                </p>
              </div>
            </div>

            <div className='space-y-5'>
              <HomeAboutItem text='pay strong attention to app architecture and UI/ UX quality;' />
              <HomeAboutItem text='able to bring your product to the market from inception, through specification, architecture, design, implementation, and testing;' />
              <HomeAboutItem text="treat each project responsibly, I'm always in touch, and complete the work on time;" />
              <HomeAboutItem text='up-to-date with the latest development trends, techniques, and technologies.' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
