export const Profile = () => {
  return (
    <>
      <main className=" box-border flex justify-center items-center px-[16px] py-[64px]  sm:px-[80px] sm:py-[96px]">
        <div className="container justify-between flex-col-reverse  flex sm:flex-row  px-[32px] gap-[48px] items-center">
          <div className="flex flex-col gap-[48px] w-[70%]">
            <div className="flex flex-col justify-start  gap-[8px]">
              <h1 className="text-5xl font-bold">Hi , I am Bruce Wayne </h1>
              <p className="text-base font-normal text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, dignissimos veritatis consequatur atque ipsa ex ab
                assumenda modi! Obcaecati nostrum impedit id? Maiores tempore
                saepe rerum provident, nisi rem sunt!
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <div className="text-2xl text-gray-600">
                Ulaanbaatar , Mongolia
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="w- h- p-[6px] flex justify-center items-center">
                <img className="w-[24px] h-[24px]" src="/github.png" alt="" />
              </div>
              <div className="w- h- p-[6px] flex justify-center items-center">
                <img className="w-[24px] h-[24px]" src="/twitter.png" alt="" />
              </div>
              <div className="w- h- p-[6px] flex justify-center items-center">
                <img className="w-[24px] h-[24px]" src="/figma.png" alt="" />
              </div>
            </div>
          </div>
          <div className="h-[320px] w-[280px] border-solid border-white relative rounded-[8px]">
            <img
              className="h-full w-[280px] rounded-[16px] "
              src="https://blenderartists.org/uploads/default/original/4X/2/8/d/28d5b9a9c079329efe60a3d6068d009cea6df499.jpeg"
              alt=""
            />
            <div className="h-full w-[280px] bg-gray-200 absolute left-[40px] top-[40px] -z-10 rounded-[16px]"></div>
          </div>
        </div>
      </main>
    </>
  );
};
