import React from 'react';
import Image from 'next/image';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    icon?: string;
}

const Card: React.FC<CardProps> = ({ children, className, hover, icon }) => {
    return (
        <div className={`bg-gray-800/30 rounded-xl relative 
            p-4 shadow-md text-white 
            ${className} ${hover ? 'hover:bg-gray-500/30': null}`}>
           <div className='absolute top-2 right-2'>
                {icon ? 
                    <Image src={`/icons/${icon}.svg`} 
                        alt='icon' 
                        width={24}
                        height={24} /> : 
                    null 
                }
           </div>
            {children}
        </div>
    );
};

export default Card;
