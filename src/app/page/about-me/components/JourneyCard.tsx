import React from 'react';
import Card from '@/shared/components/Card';

interface JourneyCardProps {
    journeys: string[];
}

const JourneyCard: React.FC<JourneyCardProps> = ({ journeys }) => {
    return (
        <Card >
            <h2 className='pb-4 text-2xl font-semibold'>My Coding Journey</h2>
            {journeys.map((journey, index) => (
                <p key={index} className="text-sm text-justify pb-4">{journey}</p>
            ))}
        </Card>
    );
};

export default JourneyCard;
