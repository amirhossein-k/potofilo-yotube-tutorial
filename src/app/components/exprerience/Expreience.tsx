import React from "react";

import {BsPatchCheckFill} from "react-icons/bs";
import {ExperienceItem} from "../../../../types";

const exprerienceItem: ExperienceItem[] = [
  {
    titleItem: "FrontEnd",
    frontItem: [
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "HTML",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "CSS",
        subtitle: "Intermediate",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "JavaScript",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "Bootstrap",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "React",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "NextJS",
        subtitle: "Experienced",
      },
    ],
  },
  {
    titleItem: "BackEnd",
    backItem: [
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "NodeJs",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "Prisma",
        subtitle: "Intermediate",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "MongoDb",
        subtitle: "Experienced",
      },
      {
        icon: <BsPatchCheckFill className="mt-1 text-color-priamry" />,
        title: "Python",
        subtitle: "Basic",
      },
    ],
  },
];

const Expreience = () => {
  return (
    <section id="experience">
      <h5 className="text-center text-color-light font-medium">
        What Skills i have
      </h5>
      <h2 className=" text-color-priamry text-center mb-12 text-xl font-semibold">
        My Expereince
      </h2>
      <div className="container grid lg:grid-cols-fr1 gap-8  grid-cols-1 ">
        {exprerienceItem.map((parent) => {
          return (
            <div
              key={parent.titleItem}
              className="bg-color-bg-variant mx-4 py-10 px-20 rounded-[2rem] border border-transparent transition-all hover:bg-transparent hover:border-[rgba(77, 181, 255, 0.4)] hover:cursor-default "
            >
              <h3 className="text-center mb-8 text-color-priamry">
                {parent.titleItem}
              </h3>
              <div className="grid grid-cols-fr1 auto-rows-[6rem] gap-2">
                {parent.titleItem === "FrontEnd"
                  ? parent.frontItem?.map((item) => {
                      return (
                        <article className="flex gap-5 ">
                          {item.icon}
                          <div className="">
                            <h4>{item.title}</h4>
                            <small>{item.subtitle}</small>
                          </div>
                        </article>
                      );
                    })
                  : parent.backItem?.map((item) => {
                      return (
                        <article className="flex gap-4">
                          {item.icon}
                          <div className="">
                            <h4>{item.title}</h4>
                            <small>{item.subtitle}</small>
                          </div>
                        </article>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expreience;
