import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
import UserInfo from './UserInfo';

const Header = () => {
    const date  = new Date().toLocaleDateString("bn-BD",{
        dateStyle:'full'
    })
    return (
        <header className='relative max-w-7xl mx-auto p-4'>
            
            <div className='flex justify-center items-center gap-1 flex-col sm:flex-row sm:gap-2'>
                {/* image */}
                <Image src={"/logo.webp"} width={40} height={40} alt="logo" priority>

                </Image>
                <div className='flex flex-col items-center sm:items-start'>
                    <h2 className='font-bold text-2xl text-red-700'>Bangla News 24</h2>
                    <p className='text-xs text-neutral-500'>{date}</p>
                    
                </div>
            </div>
            <UserInfo></UserInfo> 
            <Navlinks></Navlinks>
        </header>
    );
};

export default Header;