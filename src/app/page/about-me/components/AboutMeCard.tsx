import React from 'react';
import Card from '@/shared/components/Card';

const AboutMeCard: React.FC = () => {
    return (
        <Card className='pt-20'>
            <h2 className="text-xl font-bold mb-2 uppercase">beyond portfolio</h2>
            <h3 className='text-2xl font-semibold mb-2'>Let&apos;s know more about me</h3>
        </Card>
    );
};

export default AboutMeCard;