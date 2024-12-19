import AboutCard from "./AboutCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import IconCard from "./IconCard";
import InfoCard from "./InfoCard";
import MyResumeCard from "./MyResumeCard";
import NameCard from "./NameCard";
import ProjectsCard from "./ProjectsCard";
import TechnologiesCard from "./Technologies";
import { UserInfo, UserRepositories } from "@/shared/model";

interface SkeletonProps {
    info: UserInfo;
    userRepositories?: UserRepositories;
}

export function XlSkeleton({ info, userRepositories }: SkeletonProps) {

    return <>
        <div className='hidden xl:flex flex-col h-full gap-5'>
            <InfoCard />
            <AboutCard text={info.aboutMe.description} />
            <a href={info.resumePath} download>
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
            { userRepositories ? <ProjectsCard userRepositories={userRepositories} /> : null }
        </div>
    </>
}


export function MdSkeleton({ info, userRepositories }: SkeletonProps) {
    return <>
    <div className='hidden xl:hidden md:flex md:flex-col gap-5'>
        <NameCard />
        <IconCard />
        <AboutCard text={info.aboutMe.description} />
        <a href={info.resumePath} download>
            <MyResumeCard/>
        </a>
    </div>
    <div className='hidden xl:hidden md:flex md:flex-col gap-5'>
        <EducationCard educations={info.educations} />
        <ExperienceCard experiences={info.experiences} />
        { userRepositories ? <ProjectsCard userRepositories={userRepositories} /> : null }
    </div>
    </>
}

export function SmSkeleton({ info, userRepositories }: SkeletonProps) {
    return <>
        <div className='md:hidden flex flex-col h-full gap-5'>
            <IconCard />
            <AboutCard text={info.aboutMe.description} />
            <ExperienceCard experiences={info.experiences} />
            { userRepositories ? <ProjectsCard userRepositories={userRepositories} />: null}
        </div>
    </>
}