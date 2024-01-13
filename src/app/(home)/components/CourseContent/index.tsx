import Image from 'next/image';

import LinesSm from '@/../../public/linesSm.png';

import './style.css';
import Container from '@/components/Container';
import { courseContentItems } from './courseContent';

const CourseContent = () => {
  return (
    <div className='bg-white w-full pb-4'>
      <div
        className='h-32 w-full flex items-center justify-start tablet:h-[234px]'
        id='content-img'
      >
        <Container>
          <div className='flex items-center justify-center gap-x-1 relative z-0 w-[136px] mt-6 tablet:w-[210px]'>
            <Image
              className='w-6 tablet:w-[30px] tablet:shrink-0'
              src={LinesSm}
              alt='O que o curso vai te ensinar?'
            />

            <h1 className='relative z-10 leading-4 font-bold tablet:text-2xl'>
              O que o curso vai te ensinar?
            </h1>
          </div>
        </Container>
      </div>

      <div className='mt-4'>
        <Container>
          <ul className='tablet:hidden'>
            {courseContentItems.map((courseContentItem) => (
              <li key={courseContentItem} className='text-text-primary text-xs'>
                {courseContentItem}
              </li>
            ))}
          </ul>

          <div className='hidden w-full gap-x-32 tablet:flex items-start'>
            <ul>
              {courseContentItems.slice(0, 3).map((courseContentItem) => (
                <li
                  key={courseContentItem}
                  className='text-text-primary text-xs'
                >
                  {courseContentItem}
                </li>
              ))}
            </ul>

            <ul>
              {courseContentItems
                .slice(4, courseContentItems.length)
                .map((courseContentItem) => (
                  <li
                    key={courseContentItem}
                    className='text-text-primary text-xs'
                  >
                    {courseContentItem}
                  </li>
                ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CourseContent;
