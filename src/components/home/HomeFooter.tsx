export const HomeFooter = ({ isFooter }: { isFooter: boolean }) => {
  const TYPE_FOOTER: string =
    'flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0';
  const TYPE_MENU: string =
    'flex flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0 max-sm:flex-col';

  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex flex-col gap-y-8'>
          <div className={isFooter ? TYPE_FOOTER : TYPE_MENU}>
            <h2
              className={
                'min-w-max text-green font-bold max-xl:pb-16 ' +
                (isFooter ? 'text-2xl' : 'text-5xl max-2xl:text-3xl')
              }>
              Don’t be shy, <br /> make the first move.
            </h2>
            <div
              className={
                '' +
                (isFooter
                  ? ''
                  : 'flex flex-row justify-between w-full px-12 max-sm:px-0')
              }>
              <div
                className={
                  'flex flex-col gap-y-8 ' +
                  (isFooter ? 'text-base' : 'text-xl max-2xl:text-base')
                }>
                <a
                  href='https://www.linkedin.com/in/ninise/'
                  className='text-dark-white underline underline-offset-4'>
                  Linkedin
                </a>

                <a
                  href='https://github.com/ninise'
                  className='text-dark-white underline underline-offset-4'>
                  GitHub
                </a>
              </div>

              <div
                className={
                  'flex flex-col gap-y-8 ' +
                  (isFooter ? 'text-base' : 'text-xl max-2xl:text-base')
                }>
                <a
                  href='linked'
                  className='text-dark-white underline underline-offset-4'>
                  Whatsapp
                </a>

                <a
                  href='linked'
                  className='text-dark-white underline underline-offset-4'>
                  Email
                </a>
              </div>

              <div
                className={
                  'flex flex-col gap-y-8 ' +
                  (isFooter ? 'text-base' : 'text-xl max-2xl:text-base')
                }>
                <a
                  href='https://www.upwork.com/freelancers/~01890cef721cd87654'
                  className='text-dark-white underline underline-offset-4'>
                  Upwork
                </a>

                <a
                  href='linked'
                  className='text-dark-white underline underline-offset-4'>
                  Resume
                </a>
              </div>
            </div>
          </div>

          {isFooter ? (
            <div className='flex flex-row justify-center gap-x-16 mt-12'>
              <a
                href='privacy'
                className='text-dark-white'>
                PRIVACY POLICY
              </a>

              <a
                href='privacy'
                className='text-dark-white'>
                COOKIES
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};
