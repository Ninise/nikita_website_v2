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
    <section className=''>
      <div className='flex max-lg:flex-col flex-row'>
        <h2 className='text-menu-button text-2xl font-bold'>About Me</h2>
        <div className='flex flex-col'>
          <h2 className='text-green text-2xl font-bold'>Hi, I’m Nikita</h2>
          <h2 className='text-green text-2xl font-bold mt-1'>
            Software Developer, based in Toronto
          </h2>

          <p className='my-6'>/ 7 years / 31 project / 24/7 support /</p>

          <div className='space-y-5'>
            <HomeAboutItem text='pay strong attention to app architecture and UI/ UX quality;' />
            <HomeAboutItem text='able to bring your product to the market from inception, through specification, architecture, design, implementation, and testing;' />
            <HomeAboutItem text="treat each project responsibly, I'm always in touch, and complete the work on time;" />
            <HomeAboutItem text='up-to-date with the latest development trends, techniques, and technologies.' />
          </div>
        </div>
      </div>
    </section>
  );
};
