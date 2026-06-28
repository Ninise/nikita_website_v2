import ChatContact from './ChatContact';

export const HomeFooter = ({ isFooter }: { isFooter: boolean }) => {
  return (
    <section id='contact' className='pt-48 pb-24 max-sm:pt-32'>
      <div className='flex flex-col gap-12'>
        <ChatContact />

        {isFooter && (
          <div className='flex flex-row gap-8 border-t border-black/10 dark:border-white/10 pt-8'>
            <p className='text-black/30 dark:text-white/30 text-xs'>Designed by Daria M.</p>
            <p className='text-black/30 dark:text-white/30 text-xs'>Developed by Nikita N.</p>
          </div>
        )}
      </div>
    </section>
  );
};
