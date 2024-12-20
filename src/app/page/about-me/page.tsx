import React from 'react';
import AboutMeCard from './components/AboutMeCard';

const AboutMePage: React.FC = () => {
    return (
        <div className='px-60 pt-9'>
            <div className='grid grid-cols-1 sm:grid-cols-1 
                md:grid-cols-2 xl:grid-cols-3'>
                    <div>
                        <AboutMeCard />
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
            </div>
        </div>
    );
};

export default AboutMePage;