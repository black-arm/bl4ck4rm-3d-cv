

import { AboutMe } from "../models";
import AboutMeCard from "./AboutMeCard";
import BooksCard from "./BooksCard";
import ChipsCard from "./ChipsCard";
import JourneyCard from "./JourneyCard";

interface AboutMeSkeletonProps {
    aboutMe: AboutMe;
}

export function XlSkeleton({ aboutMe }: AboutMeSkeletonProps) {
    return (<>
        <div className='hidden xl:flex-col xl:gap-2 xl:flex'>
            <AboutMeCard />
            <BooksCard books={aboutMe.books} />
        </div>
        <div className='hidden xl:block'>
            <JourneyCard journeys={aboutMe.journeys} />
        </div>
        <div className='hidden xl:block'>
            <ChipsCard chips={aboutMe.features} />
        </div>
    </>);
}

export function MdSkeleton({ aboutMe }: AboutMeSkeletonProps) {
    return (<>
        <div className='hidden md:flex-col md:gap-2 md:flex xl:hidden'>
            <AboutMeCard />
            <JourneyCard journeys={aboutMe.journeys} />
        </div>
        <div className='hidden md:flex md:flex-col md:gap-2 xl:hidden'>
            <ChipsCard chips={aboutMe.features} />
            <BooksCard books={aboutMe.books} />
        </div>
    </>);
}

export function SmSkeleton({ aboutMe }: AboutMeSkeletonProps) {
    return (<>
        <div className='flex-col gap-2 flex md:hidden'>
            <AboutMeCard />
            <JourneyCard journeys={aboutMe.journeys} />
            <ChipsCard chips={aboutMe.features} />
            <BooksCard books={aboutMe.books} />
        </div>
    </>);
}