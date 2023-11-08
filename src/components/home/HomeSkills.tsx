const HomeSkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full bg-skill-bubble-back hover:bg-dark-blue'>
      <p className='text-lg px-5 py-2 text-white'>{text}</p>
    </div>
  );
};

export const HomeSkills = () => {
  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10'>
            Skills & Tools
          </h2>
          <div className='flex flex-col'>
            <HomeSkillBubbleItem text='Java' />
          </div>
        </div>
      </div>
    </section>
  );
};
