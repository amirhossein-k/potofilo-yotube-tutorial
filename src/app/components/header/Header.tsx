import Image from "next/image";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiDribbble} from "react-icons/fi";
import me from "../../../../public/backme.png";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="text-center h-full relative ">
        <h5>Hello I`m</h5>
        <h1 className="font-medium text-3xl">Amir</h1>
        <h5 className="font-light text-gray-300">Fullstack Developer</h5>
        {/* cta */}
        <div className="mt-10 flex gap-5 justify-center">
          <Link href="" className="btn">
            Download CV
          </Link>
          <Link href="#contact" className="btn btn-primary">
            Lets Talk
          </Link>
        </div>
        {/* social icon */}
        <div className=" flex-col items-center gap-3 absolute left-5 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-color-priamry hidden md:flex">
          <Link href="www.linkedin.com" target="_blank" className="">
            <BsLinkedin />
          </Link>
          <Link href="www.github.com" target="_blank" className="">
            <FaGithub />
          </Link>
          <Link href="www.dribbble.com" target="_blank" className="">
            <FiDribbble />
          </Link>
        </div>
        {/* photo */}
        <div className="absolute w-[330px] h-96 group left-[calc(53%_-_11rem)] bottom-0  md:left-[calc(50%_-_11rem)] md:bottom-10">
          <div className="absolute w-[350px] h-[370px] group-hover:bottom-0 transition-[bottom] duration-300 left-[calc(50%_-_11rem)] bottom-10 rounded-t-[12rem]  bg-gradient-to-b from-[#4db5ff] to-transparent"></div>
          <Image alt="me" src={me} fill />
        </div>
        {/* scroll down */}
        <Link
          href="#contact"
          className="absolute bottom-20 right-[3rem] rotate-90 font-medium text-sm hidden md:flex"
        >
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
