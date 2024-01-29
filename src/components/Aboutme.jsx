export const About_me = ({ pap }) => {
  return (
    <>
      <main className="py-[96px] flex justify-center items-center bg-gray-100  dark:bg-gray-900">
        <div
          ref={pap}
          className=" container flex justify-center items-center px-[32px] flex-col gap-[48px]"
        >
          <div className="flex justify-center items-center">
            <div
              id="About_me "
              className="text-center bg-gray-200 dark:bg-gray-600 rounded-[16px] py-[4px] px-[12px]"
            >
              About me
            </div>
          </div>
          <div className="flex justify-between items-center flex-col  sm:flex-row gap-[100px] sm:gap-[20px]  ">
            <div className="flex justify-center items-center w-[480px] h-[480px] relative ">
              <img
                className="w-full h-full rounded-[16px] border-[8px] border-white border-solid z-[1] "
                src="75db5fe6-ba19-4da4-9174-6494a878069b.jpeg"
                alt=""
              />
              <div className="bg-gray-200 dark:bg-gray-700 absolute sm:right-[40px] sm:top-[40px] sm:w-[480px] w-[500px] top-[30px] -left-[10px] h-[480px] -z-0 rounded-[16px]"></div>
            </div>
            <div className="flex gap-[24px] flex-col sm:max-w-[50%] max-w-[80%] ">
              <div>
                <h3>Curious about me? Here you have it:</h3>
              </div>
              <div className="flex sm:gap-[16px] flex-col *:text-lg  gap-[px]">
                <p>
                  Lorem ipsum{" "}
                  {
                    <a href="https://www.w3schools.com/html/html_lists.asp">
                      hashdas
                    </a>
                  }{" "}
                  sit, amet consectetur adipisicing elit. Corrupti aperiam at
                  sed quae iure vero ipsa, fugit odit dolorem pariatur,
                  perspiciatis earum inventore iste recusandae non
                  exercitationem optio obcaecati provident.
                </p>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  vitae omnis, provident saepe tempora impedit facilis aliquid
                  quis, deleniti sint hic in? Assumenda vel sed quis odio
                  maiores et amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  pariatur beatae commodi distinctio, eveniet quis nostrum
                  possimus sint itaque molestias? Deleniti fugit soluta ex
                  commodi veniam asperiores incidunt rerum architecto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  nesciunt, voluptatibus, saepe fuga soluta est magnam maiores
                  nemo molestiae non perspiciatis! Neque, voluptas quas
                  explicabo et laudantium voluptatum aliquam vel.
                </p>
                <p>sadasdsadas</p>
                <div>
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  sed esse odio reiciendis debitis. Quibusdam earum, magni error
                  odit vel nostrum quod ad nihil nemo, blanditiis unde velit
                  praesentium numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
