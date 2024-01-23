export const Upwork = (props) => {
  const { dataArray } = props;
  return (
    <>
      {dataArray.map((el) => {
        return (
          <div className=" flex  justify-center items-center p-[32px]">
            <div className="flex sm:flex-row  flex-col  gap-[48px] shadow-md rounded-[16px]  px-[16px] py-[16px] bg-white">
              <div className="">
                <img className="w-[102px] h-[28px] " src={el.logo} alt="" />
              </div>
              <div className="flex gap-[16px] flex-col">
                <div>
                  <h3 className="text-3xl font-[600]">{el.work}</h3>
                </div>
                <div className="flex flex-col gap-[4px] *:text-gray-500">
                  <ul>{el.list1}</ul>
                  <ul>{el.list2}</ul>
                  <ul>{el.list3}</ul>
                  <ul>{el.list4}</ul>
                </div>
              </div>
              <div className="text-gray-600">{el.date}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
