import Pattern from '@/IconsSVG/Pattern';

const MainTitle = ({
  fill,
  events = false,
}: {
  fill: string;
  events?: boolean;
}) => {
  return (
    <div className="flex justify-center flex-col items-center mx-auto w-full mb-5">
      <h1
        className={`font-medium text-[32px] leading-[43px] mt-5 text-center ${
          events
            ? 'lg:leading-[83px] lg:text-[64px] '
            : 'lg:leading-[130px] lg:text-[100px] '
        }`}
      >
        LET’S TALK ABOUT IT
      </h1>
      <div className="relative flex justify-center">
        <div
          className={`absolute top-[-5px] left-[-10px] w-[13px] lg:h-[38px] h-[15px] ${
            events
              ? 'lg:w-[19px] lg:h-[21px] lg:top-[-10px]'
              : 'lg:w-[33px] lg:h-[38px] lg:top-[-10px] lg:left-[-20px]'
          }`}
        >
          <Pattern fill={fill} />
        </div>
        <h2
          className={`font-normal text-base text-center leading-5 lg:text-5xl lg:leading-[62px] ${
            events
              ? 'lg:text-[32px] lg:leading-[42px]'
              : 'lg:text-5xl lg:leading-[62px]'
          }`}
        >
          Join us to rock IT
        </h2>
      </div>
    </div>
  );
};

export default MainTitle;
