import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Dushime Christian, and I'm based in Rwanda. Born in 1998, I
          completed my education in 2021 and ventured into the world of
          professional development. Specializing in web application development,
          I focus primarily on backend architecture, ensuring the seamless
          functioning and scalability of applications. My expertise encompasses
          JavaScript proficiency, particularly within various Node.js
          frameworks, facilitating efficient backend development. Additionally,
          I excel in database management, optimizing data storage and retrieval
          for enhanced performance
        </p>

        <br />

        <p className="text-xl">
          I'm adept at designing and implementing RESTful APIs, enabling
          seamless communication between different components of web
          applications. Utilizing version control systems like Git, I ensure
          code integrity and facilitate collaboration among team members
          Security is paramount, and I prioritize implementing robust practices,
          including user authentication and data encryption. Proficient in
          various development tools and technologies, I ensure efficiency and
          quality throughout the development process.
        </p>
      </div>
    </div>
  );
};

export default About;
