import React from 'react';
import Card from '@/shared/components/Card';

interface JourneyCardProps {
    journeys: string[];
}

const JourneyCard: React.FC<JourneyCardProps> = ({ journeys }) => {
    return (
        <Card className='h-full' >
            <h2 className='pb-4 text-2xl font-semibold'>My Coding Journey</h2>
            <div className='2xl:h-full xl:h-[37rem] overflow-y-auto xl:pr-4'>
                {journeys.map((journey, index) => (
                    <p key={index} className="text-sm text-justify pb-4">{journey}</p>
                ))}
            </div>
        </Card>
    );
};

export default JourneyCard;
