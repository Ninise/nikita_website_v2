import menuIcon from '../../../public/ic_menu_burger.svg';

import Image from "next/image";

export const HomeHeader = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <button className='content-center px-5 py-2 bg-menu-button rounded-lg'>
                    <div className='inline-flex items-center space-x-4'>
                        <Image className='w-5 h-5' src={menuIcon} alt='menu icon' />
                        <p className='text-lg text-dark-blue font-medium'>MENU</p>
                    </div>
                </button>
            </div>
        </section>
    )
}