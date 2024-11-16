import IconCard from '@/components/IconCard';
import InfoCard from '@/components/InfoCard';
import NameCard from '@/components/NameCard';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='w-full h-[100vh] px-12 py-7'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white'>
          <div className='hidden xl:block'>
            <div className="flex flex-col gap-5">
              <InfoCard />
            </div>
          </div>
          <div className='hidden xl:block'>
            <div className="flex flex-col gap-5">
              <NameCard />
              <IconCard />
            </div>
          </div>
          <div className='hidden xl:block'>Visible on xl</div>
          <div className='hidden xl:block'>Visible on xl</div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='hidden md:block xl:hidden'>Visible on md</div>
          <div className='block md:hidden'>Visible on sm or smaller</div>
        </div>
      </div>
    </>
  );
}
