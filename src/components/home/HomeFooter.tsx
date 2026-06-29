import ChatContact from './ChatContact';

export const HomeFooter = ({ isFooter }: { isFooter: boolean }) => {
  return (
    <section id='contact' className='pt-48 pb-24 max-sm:pt-32'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold text-black dark:text-white max-sm:text-2xl'>
            Let&apos;s talk.
          </h2>
          <p className='text-black/50 dark:text-white/50 text-lg max-sm:text-base max-w-lg'>
            I work with founders as an advisor, fractional CTO, or hands-on lead engineer. If any of that sounds useful — start here.
          </p>
        </div>
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
