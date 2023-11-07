const HomeAboutItem = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-row space-x-5'>
      <p className='text-green text-lg'>&lt;</p>
      <p className='text-menu-button text-lg'>{text}</p>
    </div>
  );
};

export const HomeAbout = () => {
  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10'>
            About Me
          </h2>
          <div className='flex flex-col'>
            <h2 className='text-green text-2xl font-bold'>Hi, I’m Nikita</h2>
            <h2 className='text-green text-2xl font-bold mt-1'>
              Software Developer, based in Toronto
            </h2>

            <div className='flex scroll-container bg-scroll-text-back h-8 my-6'>
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
