import useDownloader from "react-use-downloader";
import { useEffect, useState } from "react";
import { Modal } from "./litle elments/Modal";
import { SunIcon } from "./icon/SunIcon";
import { MoonIcon } from "./icon/MoonIcon";

export const Header = ({
  handleAboutClick,
  handlTestClick,
  handleWorkClick,
  handleContactClick,
}) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const fileUrl = "/Балдорж Бат-Эрдэнэ.pdf";
  const filename = "Bat-Erdene.pdf";
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  // let hide = modal == true ? "visible" : "invisible";
  const OpenClick = () => {
    setModal(!modal);
    setTimeout(() => {
      setShow(!show);
    }, 10);
  };
  const CloseClick = () => {
    setShow(!show);
    setTimeout(() => {
      setModal(!modal);
    }, 300);
  };

  const aboutModal = () => {
    handleAboutClick();
    CloseClick();
  };
  const TestModal = () => {
    handlTestClick();
    CloseClick();
  };
  const WorkModal = () => {
    handleWorkClick();
    CloseClick();
  };
  const ContactModal = () => {
    handleContactClick();
    CloseClick();
  };

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
            <button
              onClick={() => {
                setDarkMode((isDarkMode) => !isDarkMode);
              }}
            >
              <div className="dark:hidden">
                <SunIcon></SunIcon>
              </div>
              <div className="hidden dark:block">
                <MoonIcon></MoonIcon>
              </div>
            </button>
            <button
              onClick={() => download(fileUrl, filename)}
              className="bg-black dark:bg-white dark:text-black text-white px-[16px] py-[6px] rounded-[8px]"
            >
              Download CV
            </button>
          </div>
        </div>
        <button
          onClick={OpenClick}
          className="sm:hidden relative  flex justify-center items-center px-[6px] py-[6px] "
        >
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
        </button>
        {modal && (
          <div className="absolute overflow-hidden top-0 w-full h-full">
            <div
              id="modalContainer"
              onClick={CloseClick}
              className={`w-full   h-[100vh] bg-opacity-40 bg-gray-400  absolute top-1 right-[1px] rounded-[8px] flex justify-end z-[3]`}
            ></div>
            <div
              className={`absolute top-1 right-[1px] z-[4] w-[80%] ${
                show ? "translate-x-0" : "translate-x-[100vh]"
              } transition-all duration-300 ease-in-out  h-[100vh] rounded-[8px] flex justify-end `}
            >
              <Modal
                isData={isDarkMode}
                swap={setDarkMode}
                filename={filename}
                fileUrl={fileUrl}
                hidden={CloseClick}
                aboutModal={aboutModal}
                TestModal={TestModal}
                WorkModal={WorkModal}
                ContactModal={ContactModal}
              ></Modal>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
