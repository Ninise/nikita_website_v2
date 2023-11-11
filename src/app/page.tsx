import { HomeHeader } from '../components/home/HomeHeader';
import { HomeLanding } from '../components/home/HomeLanding';
import { HomeAbout } from '../components/home/HomeAbout';
import { HomeSkills } from '../components/home/HomeSkills';
import { HomeExperience } from '../components/home/HomeExperience';

export default function Home() {
  return (
    <div>
      {/* <div className='bg'></div> */}
      <HomeHeader />
      <main className='flex min-h-screen flex-col justify-between p-24 max-xl:p-28'>
        <HomeLanding />
        <HomeAbout />
        <HomeSkills />
        <HomeExperience />
      </main>
    </div>
  );
}
