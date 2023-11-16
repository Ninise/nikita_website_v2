export const HomeFooter = () => {
  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex flex-col gap-y-8'>
          <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
            <h2 className='min-w-max text-green text-2xl font-bold max-xl:pb-16'>
              Don’t be shy, <br /> make the first move.
            </h2>
            <div className='flex flex-col gap-y-8'>
              <a
                href='https://www.linkedin.com/in/ninise/'
                className='text-base text-dark-white underline underline-offset-4'>
                Linkedin
              </a>

              <a
                href='https://github.com/ninise'
                className='text-base text-dark-white underline underline-offset-4'>
                GitHub
              </a>
            </div>

            <div className='flex flex-col gap-y-8'>
              <a
                href='linked'
                className='text-base text-dark-white underline underline-offset-4'>
                Whatsapp
              </a>

              <a
                href='linked'
                className='text-base text-dark-white underline underline-offset-4'>
                Email
              </a>
            </div>

            <div className='flex flex-col gap-y-8'>
              <a
                href='https://www.upwork.com/freelancers/~01890cef721cd87654'
                className='text-base text-dark-white underline underline-offset-4'>
                Upwork
              </a>

              <a
                href='linked'
                className='text-base text-dark-white underline underline-offset-4'>
                Resume
              </a>
            </div>
          </div>

          <div className='flex flex-row justify-center gap-x-16 mt-12'>
            <a
              href='privacy'
              className='text-base text-dark-white'>
              PRIVACY POLICY
            </a>

            <a
              href='privacy'
              className='text-base text-dark-white'>
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
