export const WorkCardTag = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-wrap gap-[30px] ">
      {data.map((el) => {
        return (
          <div className="px-[20px] py-[4px] flex justify-center items-center rounded-[12px] dark:bg-gray-700 bg-gray-200 h-[28px] w-fit">
            {el.talent}
          </div>
        );
      })}
    </div>
  );
};
