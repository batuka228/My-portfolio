import useDownloader from "react-use-downloader";
export const Header = ({
  handleAboutClick,
  handlTestClick,
  handleWorkClick,
  handleContactClick,
}) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/Балдорж Бат-Эрдэнэ.pdf";
  const filename = "Bat-Erdene.pdf";
  return (
    <>
      <header className="flex justify-center flex-row py-[16px] px-[80px] ">
        <div className=" container flex  flex-row p-5 justify-between w-full px-[32px] ">
          <h2 className="font-cm font-normal text-4xl">css</h2>
          <div className="sm:flex flex-row items-center gap-[20px] hidden">
            <button onClick={handleAboutClick} href="">
              About
            </button>
            <button onClick={handleWorkClick} href="">
              Work
            </button>
            <button onClick={handlTestClick} href="">
              Testimonails
            </button>
            <button onClick={handleContactClick} href="">
              Contact
            </button>
            <img src="" alt="" />
            <button
              onClick={() => download(fileUrl, filename)}
              className="bg-black text-white px-[16px] py-[6px] rounded-[8px]"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="sm:hidden  flex justify-center items-center px-[6px] py-[6px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 12H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </header>
    </>
  );
};
