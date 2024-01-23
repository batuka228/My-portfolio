import { Upwork } from "./Upwork";

const data = [
  {
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    work: " Sr. Frontend Developer",
    list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list3: "Sed quis justo ac magna.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021 - Present",
  },
  {
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    work: " Sr. Frontend Developer",
    list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021 - Present",
  },
  {
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    work: " Sr. Frontend Developer",
    list1: `Lorem ipsum dolor sit amet, consectetur  adipiscing elit.`,
    list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list3: "Sed quis justo ac magna.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021 - Present",
  },
  {
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png",
    work: " Sr. Frontend Developer",
    list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list3: "Sed quis justo ac magna.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021 - Present",
  },
];
export const Experience = () => {
  return (
    <div className="sm:py-[80px] sm:px-[96px] flex justify-center items-center bg-gray-50  flex-col gap-[16px] py-[16px] px-[64px]">
      <div className="bg-gray-300 w-fit  rounded-[16px] py-[4px] px-[20px]">
        Experience
      </div>
      <p>Here is a quick summary of my most recent experiences</p>
      <div className="container flex justify-center items-center flex-col ">
        <Upwork dataArray={data}></Upwork>
      </div>
    </div>
  );
};
