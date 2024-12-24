import React from 'react';
import AboutMeCard from './components/AboutMeCard';
import { fetchAboutMe } from './api/about-me.api';
import BooksCard from './components/BooksCard';
import JourneyCard from './components/JourneyCard';

const AboutMePage: React.FC = async () => {

    const aboutMe = await fetchAboutMe();

    return (
        <div className='px-60 pt-9'>
            <div className='grid grid-cols-1 sm:grid-cols-1 
                md:grid-cols-2 xl:grid-cols-3 content-evenly gap-8'>
                    <div className='flex-col gap-2 flex'>
                        <AboutMeCard />
                        <BooksCard books={aboutMe.books} />
                    </div>
                    <div>
                        <JourneyCard journeys={aboutMe.journeys} />
                    </div>
                    <div>
                    </div>
            </div>
        </div>
    );
};

export default AboutMePage;