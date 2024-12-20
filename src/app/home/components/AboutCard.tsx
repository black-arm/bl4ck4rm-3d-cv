import React from 'react';
import Card from '@/shared/components/Card';

interface AboutCardProps {
    text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ text }) => {
    return (
        <Card className='h-full' link='page/about-me' icon='arrow_up_right'>
            <div className='w-full h-full flex justify-end flex-col'>
                <h2 className='text-2xl font-bold'>About Me</h2>
                <p>{text}</p>
            </div>
        </Card>
    );
};

export default AboutCard;