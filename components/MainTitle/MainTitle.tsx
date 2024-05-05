import Pattern from '@/IconsSVG/Pattern';

const MainTitle = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-5">
      <h2 className=" font-medium text-[32px] leading-[43px] mt-5">
        LET’S TALK ABOUT IT
      </h2>
      <div className="relative flex justify-center">
        <div className="absolute top-[-5px] left-[-10px]">
          <Pattern fill="#0C0C0C" />
        </div>
        <h3>Join us to rock IT</h3>
      </div>
    </div>
  );
};

export default MainTitle;
