import { WorkCard } from "./litle elments/WorkCard";
import { WorkCardImg } from "./litle elments/WorkCardImg";
const DataArray = [
  {
    workcard_img:
      "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    card_header: "Fiskil",
    card_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt omnis enim, ipsam, fugiat eum officia possimus rem ab doloribus asperiores dolor mollitia necessitatibus eius. Libero laudantium facilis fuga ut.",
  },
  {
    workcard_img:
      "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    card_header: "Fiskil",
    card_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt omnis enim, ipsam, fugiat eum officia possimus rem ab doloribus asperiores dolor mollitia necessitatibus eius. Libero laudantium facilis fuga ut.",
  },
  {
    workcard_img:
      "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    card_header: "Fiskil",
    card_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt omnis enim, ipsam, fugiat eum officia possimus rem ab doloribus asperiores dolor mollitia necessitatibus eius. Libero laudantium facilis fuga ut.",
  },
];
export const Work = ({ pop }) => {
  return (
    <div
      ref={pop}
      className="sm:px-[96px] sm:py-[80px] flex justify-center items-center px-[16px] py-[64px] "
    >
      <div className="container flex flex-col gap-[16px] rounded-[16px] ">
        <div className="text-center flex justify-center items-center">
          <div className="bg-gray-300 dark:bg-gray-700 w-fit  rounded-[16px] py-[4px] px-[20px]">
            work
          </div>
        </div>
        <p className=" text-gray-500 dark:text-gray-300 text-center">
          Some of the noteworthy projects I have built:
        </p>
        <div className="flex flex-col gap-[30px]  ">
          {DataArray.map((el, i) => {
            let row = i % 2 !== 0 ? "flex-row-reverse" : "flex-row";

            return (
              <div
                className={`sm:flex ${row}  sm:*:w-[50%] shadow-sm rounded-[16px] relative overflow-hidden`}
              >
                <WorkCardImg />
                <WorkCard data={DataArray} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
// {DataArray.map((el, i) => {
//     if (i == 1) {
//       return (
//         <div className="flex flex-row-reverse *:w-[50%]  shadow-md ">
//           <WorkCardImg></WorkCardImg>
//           <WorkCard></WorkCard>
//         </div>
//       );
//     } else {
//       return (
//         <div className="flex flex-row *:w-[50%]  shadow-md ">
//           <WorkCardImg></WorkCardImg>
//           <WorkCard></WorkCard>
//         </div>
//       );
//     }
//   })}
