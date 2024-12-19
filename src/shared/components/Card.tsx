import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    link?: string;
    icon?: string;
}

const Card: React.FC<CardProps> = ({ children, className, link, icon }) => {
    const cardContent = (
        <div className={`bg-gray-800/30 rounded-xl relative 
            p-4 shadow-md text-white 
            ${className} ${link ? 'hover:bg-gray-500/30' : ''}`}>
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

    return link ? (
        <Link className="h-full" href={link}>
            {cardContent}
        </Link>
    ) : (
        cardContent
    );
};

export default Card;
