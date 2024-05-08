import Pattern from '@/IconsSVG/Pattern';

const MainTitle = ({ fill }: { fill: string }) => {
  return (
    <div className="flex justify-center flex-col items-center mb-5">
      <h2 className=" font-medium text-[32px] lg:text-[100px] leading-[43px] lg:leading-[130px] mt-5">
        LET’S TALK ABOUT IT
      </h2>
      <div className="relative flex justify-center">
        <div className="absolute top-[-5px] left-[-10px] lg:top-[-10px] lg:left-[-20px] lg:w-[33px] w-[13px] lg:h-[38px] h-[15px]">
          <Pattern fill={fill} />
        </div>
        <h3 className=" font-normal text-base leading-5 lg:text-5xl lg:leading-[62px]">
          Join us to rock IT
        </h3>
      </div>
    </div>
  );
};

export default MainTitle;
