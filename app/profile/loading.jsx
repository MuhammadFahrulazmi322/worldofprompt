import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center'>
      <Image
        src='assets/icons/loader.svg'
        width={70}
        height={70}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;