
import React from 'react';
import InfoCard from './components/InfoCard';
import IconCard from './components/IconCard';
import NameCard from './components/NameCard';
import TechnologiesCard from './components/Technologies';
import AboutCard from './components/AboutCard';
import { fetchRepositories as fetchUserRepositories, getInfo } from './api/home.api';
import { UserInfo } from '../../shared/model';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import MyResumeCard from './components/MyResumeCard';
import ProjectsCard from './components/ProjectsCard';

export default async function Home() {

  const info: UserInfo = await getInfo();
  const userRepositories = await fetchUserRepositories();

  return (
    <>
      <div className='w-full px-60 pt-52'>
        <div className='h-[42rem] max-h-[42rem] gap-8 grid 
          grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly'>
          <div className='hidden xl:flex flex-col h-full gap-5'>
            <InfoCard />
            <AboutCard text={info.aboutMe.description} />
            <a href="/Antonio Basile - English CV.pdf" download>
              <MyResumeCard/>
            </a>
          </div>
          <div className='hidden xl:flex gap-2 flex-col h-full justify-between'>
            <NameCard />
            <IconCard />
            <TechnologiesCard technologies={info.technologies} />
          </div>
          <div className='hidden xl:flex flex-col h-full justify-between gap-5'>
            <EducationCard educations={info.educations} />
            <ExperienceCard experiences={info.experiences} />
          </div>
          <div className='hidden xl:flex flex-col h-full justify-between gap-5'>
           { userRepositories ? <ProjectsCard userRepositories={userRepositories} />: null}
          </div>
          {/* <div className='hidden xl:block'>
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
              <TechnologiesCard technologies={info.technologies} />
            </div>
          </div>
          <div className='hidden xl:block'>
              <ExperienceCard experiences={info.experiences} />
          </div>
          <div className='hidden xl:block h-full'>
            <div className="flex flex-col gap-5 h-full">
              <EducationCard educations={info.educations} />
            </div>
          </div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='block md:hidden'>Visible on sm or smaller</div> */}
        </div>
      </div>
    </>
  );
}
