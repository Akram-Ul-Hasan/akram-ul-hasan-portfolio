
const AboutMe = () => {
  return (
    <div>
      <h1 className="text-5xl m-5 text-center font-bold">About Me</h1>

      <div className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <p className="py-6">
              A dedicated MERN stack developer hailing from Dhaka, Bangladesh.
              Equipped with a Bachelor's degree in Computer Science and
              Engineering from Chittagong University of Engineering and
              Technology, I'm passionate about leveraging cutting-edge
              technologies to deliver efficient and user-friendly web solutions
            </p>
          </div>
          <img
            src="https://i.ibb.co/bRHpYFj/akram.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
