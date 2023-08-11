import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import animationData from "../assets/portfolio-lottiefiles.json";

const HomeHeader = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row md:justify-evenly">
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-bold">
            Hi, I am <br /> Md. Akram Ul Hasan
          </h1>
          <TypeAnimation
            sequence={[
              "MERN Stack Developer", // Types 'One'
              2000, // Waits 1s
              "Full Stack Web Developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Frontend Developer", // Types 'Three' without deleting 'Two'
              2000, // Waits 2s
              "Backend Developer",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3em", display: "inline-block" }}
          />
          <p className="py-6">
            A dedicated MERN stack developer hailing from Dhaka, Bangladesh.
            Equipped with a Bachelor's degree in Computer Science and
            Engineering from Chittagong University of Engineering and
            Technology, I'm passionate about leveraging cutting-edge
            technologies to deliver efficient and user-friendly web solutions
          </p>
          <button className="btn btn-outline btn-primary">
            <a href="Akram-Resume.pdf" download="Resume.pdf">
              Download Resume
            </a>
          </button>
        </div>
        <div className="">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
