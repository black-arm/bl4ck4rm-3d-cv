
import React from 'react';
import { fetchRepositories as fetchUserRepositories, getInfo } from './api/home.api';
import { UserInfo } from '../../shared/model';
import { MdSkeleton, SmSkeleton, XlSkeleton } from './components/skeletons';

export default async function Home() {

  const info: UserInfo = await getInfo();
  const userRepositories = await fetchUserRepositories();

  return (
    <>
      <div className='w-full xl:px-60 xl:pt-52 md:px-40 md:pt-40 px-10 pt-16'>
        <div className='h-[42rem] max-h-[42rem] gap-8 grid 
          grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly'>
          <XlSkeleton info={info} userRepositories={userRepositories} />
          <MdSkeleton info={info} userRepositories={userRepositories} />
          <SmSkeleton info={info} userRepositories={userRepositories} />
        </div>
      </div>
    </>
  );
}
