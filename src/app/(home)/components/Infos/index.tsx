import Container from '@/components/Container';
import Info from './Components/Info';

import { infos } from './infos';
import RegisterButton from './Components/RegisterButton';

const Infos = () => {
  return (
    <>
      <div className='bg-primary rounded-b-2xl py-4 desktop:bg-white'>
        <Container className='mx-auto desktop:hidden'>
          <div className='grid grid-cols-2 gap-y-4 gap-x-4 tablet:grid-cols-3'>
            {infos.map((info) => (
              <Info key={info.title} info={info} />
            ))}
          </div>

          <RegisterButton />
        </Container>
      </div>

      <div className='hidden desktop:block absolute right-[50px] bottom-[25px] bg-primary rounded-2xl p-4 w-[250px]'>
        <div className='flex flex-col gap-y-4 gap-x-4 tablet:grid-cols-3'>
          {infos.map((info) => (
            <Info key={info.title} info={info} />
          ))}
        </div>

        <RegisterButton />
      </div>
    </>
  );
};

export default Infos;
