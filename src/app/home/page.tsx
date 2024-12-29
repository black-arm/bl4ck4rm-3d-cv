
import React from 'react';
import { fetchRepositories as fetchUserRepositories, getInfo, fetchArticlesList } from './api/home.api';
import { UserInfo } from '../../shared/model';
import { MdSkeleton, SmSkeleton, XlSkeleton } from './components/skeletons';

export default async function Home() {

  const info: UserInfo = await getInfo();
  const userRepositories = await fetchUserRepositories();
  const devToArticles = await fetchArticlesList();
  
  return (
    <>
      <div className='w-full 2xl:px-60 md:px-40 md:pt-20 md:pb-10 xl:py-5 2xl:pt-32 p-10'>
        <div className='gap-8 grid 
          grid-cols-1 md:grid-cols-2 xl:grid-cols-4 content-evenly'>
          <XlSkeleton info={info} userRepositories={userRepositories} devToArticles={devToArticles} />
          <MdSkeleton info={info} userRepositories={userRepositories} devToArticles={devToArticles} />
          <SmSkeleton info={info} userRepositories={userRepositories} devToArticles={devToArticles} />
        </div>
      </div>
    </>
  );
}
