import ChatContact from './ChatContact';

export const HomeFooter = ({ isFooter }: { isFooter: boolean }) => {
  return (
    <section id='contact' className='pt-48 pb-24 max-sm:pt-32'>
      <div className='flex flex-col gap-12'>
        <ChatContact />

        {isFooter && (
          <div className='flex flex-row gap-6 border-t border-black/10 dark:border-white/10 pt-8'>
            <a href='https://github.com/Ninise' target='_blank' rel='noopener noreferrer' className='text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white text-xs transition-colors duration-200'>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/ninise/' target='_blank' rel='noopener noreferrer' className='text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white text-xs transition-colors duration-200'>
              LinkedIn
            </a>
            <a href='https://nnikitin.substack.com' target='_blank' rel='noopener noreferrer' className='text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white text-xs transition-colors duration-200'>
              Substack
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
