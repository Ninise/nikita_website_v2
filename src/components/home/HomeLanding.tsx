export const HomeLanding = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center pt-20'>
      <h1 className='text-8xl font-bold text-black dark:text-white leading-none tracking-tight mb-10 max-xl:text-6xl max-sm:text-5xl'>
        Nikita<br />Nikitin.
      </h1>
      <div className='flex flex-col gap-2 max-w-lg'>
        <p className='text-2xl text-black/40 dark:text-white/40 max-sm:text-xl'>
          Staff Mobile Engineer at Intuit.
        </p>
        <p className='text-2xl text-black/40 dark:text-white/40 max-sm:text-xl'>
          10 years in iOS, Android, and fintech.
        </p>
        <p className='text-2xl text-black dark:text-white max-sm:text-xl mt-1'>
          I help startups build mobile right the first time.
        </p>
      </div>
    </section>
  );
};
