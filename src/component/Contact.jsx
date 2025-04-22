import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto py-4" id="contact">
      <h1 className="text-xl lg:text-3xl font-bold mt-16 lg:mb-2 ml-4 text-start">
        Contact <span className="text-yellow-300">Me</span>
      </h1>
      <div
        className="flex flex-row justify-center items-center gap-4 h-[17vh]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Link
          to="https://www.instagram.com/_avii_the_unique?igsh=YTBua3NzbW93a2N4"
          target="_blank"
          className=" bg-black p-2 lg:p-2 rounded-full border-2 border-yellow-300 hover:shadow-[2px_1px_20px_12px_rgba(101,175,10,0.5)]"
        >
          <FaInstagram className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://www.facebook.com/share/16TdhyQWXv/"
          target="_blank"
          className=" bg-black p-2 lg:p-2 rounded-full border-2 border-yellow-300 hover:shadow-[2px_1px_20px_12px_rgba(101,175,10,0.5)]"
        >
          <CiFacebook className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/avinash-b-6b3ba7282/"
          target="_blank"
          className=" p-2 lg:p-2 rounded-full border-2 border-yellow-300 hover:shadow-[2px_1px_20px_12px_rgba(101,175,10,0.5)]"
        >
          <CiLinkedin className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="https://github.com/avi17032004"
          target="_blank"
          className=" bg-black p-2 lg:p-2 rounded-full border-2 border-yellow-300 hover:shadow-[2px_1px_20px_12px_rgba(101,175,10,0.5)]"
        >
          <FaGithubSquare className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
        <Link
          to="mailto:balaji.avinash17@gmail.com"
          target="_blank"
          className=" bg-black p-2 lg:p-2 rounded-full border-2 border-yellow-300 hover:shadow-[2px_1px_20px_12px_rgba(101,175,10,0.5)]"
        >
          <SiGmail className="h-4 w-4 lg:h-8 lg:w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
