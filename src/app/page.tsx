import { HomeHeader } from '../components/home/HomeHeader';
import { HomeLanding } from '../components/home/HomeLanding';
import { HomeAbout } from '../components/home/HomeAbout';

export default function Home() {
  return (
    <div>
      <div className='bg'></div>
      <main className='flex min-h-screen flex-col justify-between p-24'>
        <HomeHeader />
        <HomeLanding />
        <HomeAbout />
      </main>
    </div>
  );
}
