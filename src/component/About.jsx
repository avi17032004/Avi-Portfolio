import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto py-10 px-4" id="about">
      <h1 className="text-xl lg:text-3xl font-bold mt-16 mb-12 text-start">
        About <span className="text-yellow-300">Me</span>
      </h1>
      <div
        className="bg-[rgb(40,47,97)] p-5 rounded-lg border-2 border-yellow-300 shadow-[5px_5px_15px_5px_rgba(101,175,10,0.5)] text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* <p className="text-xl leading-9">
          Hi, I'm <span className="text-yellow-300 font-semibold">Avinash B</span>, a passionate and driven web developer with a
          Bachelor's degree in Computer Applications (BCA), graduated in 2024.
          After graduation, I completed a full-fledged MERN Stack Development
          course, gaining hands-on experience in both frontend and backend
          technologies. My technical toolkit includes HTML, CSS, JavaScript,
          Bootstrap, Tailwind CSS, React.js, Redux, Node.js, Express.js,
          MongoDB, and SQL. I specialize in building modern, responsive, and
          user-friendly web interfaces using React and Tailwind. While I'm
          confident working across the full stack, my primary focus is on
          Front-End Development and crafting seamless user experiences. I enjoy
          turning complex problems into elegant solutions through clean code and
          intuitive UI design. Currently, I'm seeking opportunities as a React
          Developer, Front-End Developer, or MERN Stack Developer. I'm eager to
          contribute to exciting projects and grow as part of a forward-thinking
          tech team.
        </p> */}
        <p className="text-xl leading-9" >
        I'm a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js, ReactJS, and Figma. I'm passionate about using these skills to develop innovative web applications that are user-friendly. I'm always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving real-world problems. Currently, I’m looking for exciting opportunities as a React Developer, Front-End Developer, or MERN Stack Developer.
        I'm excited to contribute to projects that value creativity, collaboration, and a strong development culture.

        </p>
      </div>
    </div>
  );
};

export default About;
