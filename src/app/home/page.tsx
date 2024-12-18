
import React from 'react';
import InfoCard from './components/InfoCard';
import IconCard from './components/IconCard';
import NameCard from './components/NameCard';
import TechnologiesCard from './components/Technologies';
import AboutCard from './components/AboutCard';
import { getInfo } from './api/home.api';
import { UserInfo } from '../../shared/model';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import MyResumeCard from './components/MyResumeCard';

export default async function Home() {

  const info: UserInfo = await getInfo();

  return (
    <>
      <div className='w-full h-[95vh] p-20'>
        <div className='h-full max-h-full gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white'>
          <div className='hidden xl:block'>
            <div className="flex flex-col gap-5">
              <InfoCard />
              <AboutCard text={info.aboutMe.description} />
              <a href="/Antonio Basile - English CV.pdf" download>
                <MyResumeCard/>
              </a>
            </div>
          </div>
          <div className='hidden xl:block'>
            <div className="flex flex-col gap-5">
              <NameCard />
              <IconCard />
            </div>
          </div>
          <div className='hidden xl:block'>
            <TechnologiesCard technologies={info.technologies} />
          </div>
          <div className='hidden xl:block h-full'>
            <div className="flex flex-col gap-5 h-full">
              <EducationCard educations={info.educations} />
              <ExperienceCard experiences={info.experiences} />
            </div>
          </div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='block md:hidden'>Visible on sm or smaller</div>
        </div>
      </div>
    </>
  );
}
