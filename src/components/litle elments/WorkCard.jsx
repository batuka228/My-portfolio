import { WorkCardTag } from "./WorkCardTag";

const DataArray = [
  { talent: "React" },
  { talent: "Next.js" },
  { talent: "Figma" },
  { talent: "Typescript" },
  { talent: "nest.js" },
  { talent: "PostgreSQL" },
  { talent: "Tailwindcss" },
  { talent: "Cypress" },
  { talent: "Storybook" },
  { talent: "Git" },
];
export const WorkCard = (props) => {
  const { data } = props;
  return (
    <div className="px-[48px] py-[48px] flex justify-center ">
      <div className="flex flex-col gap-[24px]">
        <h3>Fiskil</h3>
        <p className="text-gray-">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          nesciunt omnis enim, ipsam, fugiat eum officia possimus rem ab
          doloribus asperiores dolor mollitia necessitatibus eius. Libero
          laudantium facilis fuga ut.
        </p>
        <div>
          <WorkCardTag data={DataArray}></WorkCardTag>
        </div>
        <div className="flex px-[6px] py-[6px]  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 3H21V9"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14L21 3"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
