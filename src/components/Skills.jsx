import { Figma } from "./icon/Figma";
import { Git } from "./icon/Git";
import { Js } from "./icon/Js";
import { React } from "./icon/React";
import { Tailwind } from "./icon/Tailwind";
import { Typescript } from "./icon/Typescript";
import { Node } from "./icon/Node";

export const Skills = ({ pep }) => {
  return (
    <div
      ref={pep}
      className="flex justify-center items-center py-[96px] px-[80px]"
    >
      <div className="px-[32px] flex flex-col gap-[48px] ">
        <div className="gap-[32px] flex flex-col">
          <div className="flex justify-center items-center">
            <div className="text-center bg-gray-300 py-[4px] px-[20px] rounded-[12px]">
              Skills
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <p className="text-md text-gray-600">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Js></Js>
          <Typescript></Typescript>
          <Git></Git>
          <Figma></Figma>
        </div>
      </div>
    </div>
  );
};
