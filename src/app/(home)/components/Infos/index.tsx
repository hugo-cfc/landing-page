import Container from '@/components/Container';
import Info from './Components/Info';

import { infos } from './infos';
import Button from '@/components/Button';

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

          <Button className='mt-8 w-full font-bold tablet:w-8/12 tablet:mx-auto'>
            MATRICULE-SE
          </Button>
        </Container>
      </div>

      <div className='hidden desktop:block absolute right-[50px] bottom-[25px] bg-primary rounded-2xl p-4 w-[250px]'>
        <div className='flex flex-col gap-y-4 gap-x-4 tablet:grid-cols-3'>
          {infos.map((info) => (
            <Info key={info.title} info={info} />
          ))}
        </div>

        <Button className='mt-8 w-full font-bold tablet:w-8/12 tablet:mx-auto'>
          MATRICULE-SE
        </Button>
      </div>
    </>
  );
};

export default Infos;
