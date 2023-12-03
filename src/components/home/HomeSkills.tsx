const HomeSkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full bg-skill-bubble-back hover:bg-dark-blue mx-1 my-2'>
      <p className='text-lg px-5 py-2 text-white max-sm:text-xs'>{text}</p>
    </div>
  );
};

const HomeSkillListItem = ({
  type,
  color,
  list,
}: {
  type: string;
  color: string;
  list: Array<string>;
}) => {
  return (
    <div className='flex flex-col mb-5'>
      <h1 className={'text-2xl max-sm:text-xl ' + ' text-' + color}>{type}</h1>
      <div className='flex flex-wrap'>
        {list.map((item, i) => {
          return (
            <HomeSkillBubbleItem
              text={item}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export const HomeSkills = () => {
  const MAIN_TABLET: string = 'max-xl:flex-col max-xl:space-x-0';

  return (
    <section className='grid pt-72 max-sm:pt-32 max-sm:w-[350px]'>
      <div className='justify-self-center'>
        <div
          className={`flex flex-row justify-between justify-self-center space-x-36 ${MAIN_TABLET}`}>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10 max-sm:text-xl'>
            Skills & Tools
          </h2>
          <div className='flex flex-col'>
            <HomeSkillListItem
              type='Android'
              color='purple'
              list={[
                'Java',
                'Kotlin',
                'SQLite',
                'Realm',
                'Room',
                'Jetpack Compose',
                'Hilt',
                'Firebase',
                'Retrofit',
              ]}
            />

            <HomeSkillListItem
              type='iOS'
              color='green'
              list={[
                'Swift',
                'SwiftUI',
                'UIKit',
                'MVVM',
                'CoreData',
                'Alamofire',
                'Combine',
                'WebRTC',
                'socket.io',
                'Callkit',
                'Push notifications',
              ]}
            />

            <HomeSkillListItem
              type='Backend'
              color='orange'
              list={[
                'JavaScript',
                'NodeJS',
                'MongoDB',
                'Express',
                'Mongoose',
                'Python',
                'Postgres',
                'Pydantic',
                'Sqlalchemy',
              ]}
            />

            <HomeSkillListItem
              type='Frontend'
              color='purple'
              list={[
                'React',
                'Redux',
                'NextJS',
                'Handlebars',
                'VanillaJS',
                'TypeScript',
                'Tailwind',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
