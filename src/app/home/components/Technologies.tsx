import React from 'react';
import Card from '@/components/Card';
import Image from 'next/image';

interface TechnologiesCardProps {
    technologies: string[];
}

const TechnologiesCard: React.FC<TechnologiesCardProps> = ({ technologies }) => {
    return (
        <Card>
            <h2 className='text-2xl font-semibold text-center mb-4'>Technologies</h2>
            <div className='flex justify-center flex-wrap'>
            {technologies.map((tech, index) => (
                <div key={index} className='m-2'>
                    <Image src={`/icons/technologies/${tech}.svg`} 
                        alt={tech} 
                        width={48} 
                        height={48} 
                    />
                </div>
            ))}
            </div>
        </Card>
    );
};

export default TechnologiesCard;