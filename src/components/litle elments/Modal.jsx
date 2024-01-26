import { MoonIcon } from "../icon/MoonIcon";
import { SunIcon } from "../icon/SunIcon";
export const Modal = ({
  aboutModal,
  TestModal,
  WorkModal,
  ContactModal,
  hidden,
  fileUrl,
  filename,
  swap,
  isData,
}) => {
  return (
    <div className="bg-white dark:bg-black  w-[80%] flex justify-start items-start flex-col gap-[16px] px-[16px] py-[40px] rounded-[8px]">
      <div className="border-b flex justify-between w-[80%]">
        <div className="text-lg">SS</div>
        <button
          onClick={hidden}
          className="flex rounded-[8px] px-[6px] py-[6px] justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-start gap-[16px] ">
        <button onClick={aboutModal} href="">
          About
        </button>
        <button onClick={WorkModal} href="">
          Work
        </button>
        <button onClick={TestModal} href="">
          Testimonails
        </button>
        <button onClick={ContactModal} href="">
          Contact
        </button>
        <button
          onClick={() => {
            swap((isData) => !isData);
          }}
          className=" flex gap-[16px] text-md "
        >
          Dark theme
          <div className="dark:hidden">
            <SunIcon></SunIcon>
          </div>
          <div className="hidden dark:block">
            <MoonIcon></MoonIcon>
          </div>
        </button>
      </div>
      <div className="flex  w-[100%]">
        <button
          onClick={() => download(fileUrl, filename)}
          className="bg-black w-[70%] dark:bg-black dark:text-white text-white px-[16px] py-[6px] rounded-[8px]"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
