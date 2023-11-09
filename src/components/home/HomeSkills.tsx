const HomeSkillBubbleItem = ({ text }: { text: string }) => {
  return (
    <div className='flex rounded-full bg-skill-bubble-back hover:bg-dark-blue mx-1 my-2'>
      <p className='text-lg px-5 py-2 text-white'>{text}</p>
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
      <h1 className={'text-2xl' + ' text-' + color}>{type}</h1>
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
  return (
    <section className='grid pt-72'>
      <div className='w-9/12 justify-self-center max-xl:w-11/12'>
        <div className='flex max-xl:flex-col flex-row justify-between justify-self-center space-x-36 max-xl:space-x-0'>
          <h2 className='min-w-max text-menu-button text-2xl font-bold max-xl:pb-10'>
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
                'Handlebars',
                'VanillaJS',
                'Mongoose',
                'Python',
                'Postgres',
                'Pydantic',
                'Sqlalchemy',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
