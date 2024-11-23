import React from 'react';
import Card from '@/components/Card';

const InfoCard: React.FC = () => {
    return (
        <Card icon='code_bracket'>
           <div className='w-full h-32 relative'>
                <div className='group h-full w-full'>
                    <div className='absolute inset-0 flex flex-col justify-end 
                        transition-opacity duration-300 opacity-100 group-hover:opacity-0'>
                        <h1 className='text-xl font-thin'>
                            The only way to go fast is 
                            <span className='font-extrabold'> to go well.</span>
                        </h1>    
                    </div>
                    <div className='absolute inset-0 flex flex-col justify-end 
                        transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                        <h1 className="text-2xl">Software Developer</h1>
                        <h6 className="text-xs">Taranto, <span className='font-semibold'>Italy</span></h6>
                    </div>
                </div>
           </div>
        </Card>
    );
};

export default InfoCard;