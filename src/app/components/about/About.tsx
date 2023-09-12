import Image from "next/image";
import React from "react";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import me from "../../../../public/about.jpg";
import {AboutItem} from "../../../../types";
import Link from "next/link";

const itemAbout: AboutItem[] = [
  {
    icon: <FaAward className="text-color-priamry text-2xl mb-4" />,
    title: "Experience",
    subtitle: "2+ Years Working",
  },
  {
    icon: <FiUsers className="text-color-priamry text-2xl mb-4" />,
    title: "Clients",
    subtitle: "200+ Worldwide",
  },
  {
    icon: <VscFolderLibrary className="text-color-priamry text-2xl mb-4" />,
    title: "Projects",
    subtitle: "80+ Completed",
  },
];

const About = () => {
  return (
    <section id="about" className="mt-32">
      <h5 className="text-center text-color-light font-medium ">Get to Talk</h5>
      <h2 className="text-color-priamry text-center mb-12 text-xl font-semibold">
        About Me
      </h2>
      <div className="container grid grid-cols-1 gap-10 place-items-center lg:place-items-center md:grid-cols-about md:gap-[5%] md:place-items-start ">
        <div className=" rounded-[2rem] bg-gradient-to-r from-[#4db5ff] to-transparent grid h-fit w-[65%] md:mt-8 md:mx-auto md:mb-16 md:w-full sm:w-1/2 sm:mt-0 sm:mx-auto sm:mb-12">
          <div className="rounded-[2rem] overflow-hidden aspect-square rotate-12 hover:rotate-0 transition-all duration-500">
            <Image
              alt="about me"
              src={me}
              quality={100}
              width={700}
              height={700}
              className="w-full object-cover"
            />
          </div>
        </div>
        {/* items */}
        <div className="md:text-center md:my-6 md:mx-0 mx-4">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-about_sm sm:gap-8 ">
            {itemAbout.map((item) => {
              return (
                <article className="bg-color-bg-variant border border-transparent rounded-2xl md:p-8 text-center transition-all hover:bg-transparent hover:border-color-priamry hover:cursor-default p-1 flex justify-center items-center flex-col">
                  {item.icon}
                  <h5 className="text-sm">{item.title}</h5>
                  <small className="text-sm text-color-light">
                    {item.subtitle}
                  </small>
                </article>
              );
            })}
          </div>
          <p className="mt-8 mb-11 text-color-light md:mt-4 md:mx-0 md:mb-6 sm:my-6 sm:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            nesciunt dolor consequuntur ad corrupti ipsam laborum hic
            recusandae? Quia vero quo, inventore aliquid voluptas quisquam
            veritatis animi rerum possimus cumque.
          </p>
          <Link href="#contact" className="btn btn-primary">
            Lets Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
