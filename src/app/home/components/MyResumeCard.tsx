import Card from '@/shared/components/Card';
import React from 'react';

const MyResumeCard: React.FC = () => {
    return (
        <Card
            icon='download' 
            className="bg-slate-500">
            <h2 className='font-xl font-bold xl:py-3 py-5'>My Resume</h2>
        </Card>
    );
};

export default MyResumeCard;