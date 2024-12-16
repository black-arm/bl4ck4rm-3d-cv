import React from 'react';
import Card from '@/shared/components/Card';

interface AboutCardProps {
    text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ text }) => {
    return (
        <Card className="about-card" link='about-me' icon='arrow_up_right'>
            <h2 className='text-2xl font-bold'>About Me</h2>
            <p>{text}</p>
        </Card>
    );
};

export default AboutCard;