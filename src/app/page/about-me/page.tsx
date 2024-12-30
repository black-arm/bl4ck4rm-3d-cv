import React from 'react';
import { fetchAboutMe } from './api/about-me.api';
import { MdSkeleton, SmSkeleton, XlSkeleton } from './components/skeletons';

const AboutMePage: React.FC = async () => {

    const aboutMe = await fetchAboutMe();

    return (
        <div className='xl:px-60 xl:pt-9 md:px-32 md:pt-20 h-full py-16 px-20'>
            <div className='grid grid-cols-1
                md:grid-cols-2 xl:grid-cols-3 content-evenly gap-8'>
                    <SmSkeleton aboutMe={aboutMe} />
                    <MdSkeleton aboutMe={aboutMe} />
                    <XlSkeleton aboutMe={aboutMe} />
            </div>
        </div>
    );
};

export default AboutMePage;