import "./AboutMe.css";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <div>
      <SectionTitle title={"About_Me"} />

      <div className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
          <div className="w-1/2 mx-auto">
            <p className="py-6 text-lg">
              A dedicated MERN stack developer hailing from Dhaka, Bangladesh.
              Equipped with a Bachelor's degree in Computer Science and
              Engineering from Chittagong University of Engineering and
              Technology, I'm passionate about leveraging cutting-edge
              technologies to deliver efficient and user-friendly web solutions
            </p>
          </div>
          <div className="wrapperImg w-full md:w-1/2">
            <div className="boxImg w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
