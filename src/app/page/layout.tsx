import React from 'react';
import Image from 'next/image';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (<>
        <div className='fixed top-5 left-2'>
            <a href="/">
                <div className='p-5 hover:bg-gray-500/30 rounded-xl'>
                    <Image src="/icons/arrow_left.svg" 
                        alt="arrow left" 
                        width={24} 
                        height={24} 
                    />
                </div>
            </a>
        </div>
        {children}
    </>);
};

export default Layout;