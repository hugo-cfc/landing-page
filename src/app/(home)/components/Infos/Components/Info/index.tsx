export interface Info {
  icon: JSX.Element;
  title: string;
  info: string;
}

export interface InfosProps {
  info: Info;
}

const Info = ({ info }: InfosProps) => {
  const { icon, title } = info;

  return (
    <div className='flex items-center justify-start'>
      <div className='bg-white h-10 w-10 rounded-full text-text-primary flex items-center justify-center mr-4'>
        {icon}
      </div>

      <div className='flex flex-col'>
        <h1 className='font-bold'>{title}</h1>
        <h2 className='font-sm'>{info.info}</h2>
      </div>
    </div>
  );
};

export default Info;
