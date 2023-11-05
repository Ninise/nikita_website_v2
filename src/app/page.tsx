import { HomeHeader } from '../components/home/HomeHeader';
import { HomeLanding } from '../components/home/HomeLanding';

export default function Home() {
  return (
    <div>
      <div className='bg'></div>
      <main className='flex min-h-screen flex-col justify-between p-24'>
        <HomeHeader />
        <HomeLanding />
        <div></div>
      </main>
    </div>
  );
}
