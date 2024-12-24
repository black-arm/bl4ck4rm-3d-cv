import React from 'react';
import Card from '@/shared/components/Card';
import './AboutMeCard.css';

const AboutMeCard: React.FC = () => {
    return (
        <Card className='pt-10'>
            <div className='relative uppercase'>
                <div className="absolute top-0">
                    <div className='flex flex-row gap-1'>
                        {'beyond portfolio'.split('').map((char, i) => (
                            <p className='move-char'  key={i}>{char}</p>
                        ))}
                    </div>
                </div>
            </div>
            <h3 className='mt-10 text-2xl font-semibold mb-2'>Let&apos;s know more about me</h3>
        </Card>
    );
};

export default AboutMeCard;