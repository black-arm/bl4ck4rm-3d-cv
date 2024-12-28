import React from 'react';
import Card from '@/shared/components/Card';
import Chip from './Chip';
import { ChipProps } from '../models';
import './ChipsCard.css';

interface ChipCardProps {
   chips: ChipProps[];
}

const ChipsCard: React.FC<ChipCardProps> = ({chips}) => {
    return (
        <Card className='h-full'>
            <h2 className="text-2xl font-bold">My Features</h2>
            <div className='flex flex-col chips-card-box justify-end h-[95%]'>
                <div className="flex flex-wrap gap-2 p-2">
                    {chips.map((chip, index) => (
                        <Chip key={index} {...chip} />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ChipsCard;