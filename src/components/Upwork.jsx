export const Upwork = (props) => {
  const { dataArray } = props;
  return (
    <>
      {dataArray.map((el) => {
        return (
          <div className=" dark:bg-gray-700 flex  justify-center items-center p-[32px] rounded-[16px] shadow-md">
            <div className="flex sm:flex-row  dark:bg-gray-700   flex-col  gap-[48px]    px-[16px] py-[16px]">
              <div className="">
                <img className="w-[102px] h-[28px] " src={el.logo} alt="" />
              </div>
              <div className="flex gap-[16px] flex-col">
                <div>
                  <h3 className="text-2xl font-[600]">{el.work}</h3>
                </div>
                <div className="flex flex-col gap-[4px] *:text-gray-500 dark:*:text-gray-200">
                  <ul>{el.list1}</ul>
                  <ul>{el.list2}</ul>
                  <ul>{el.list3}</ul>
                  <ul>{el.list4}</ul>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200">{el.date}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
