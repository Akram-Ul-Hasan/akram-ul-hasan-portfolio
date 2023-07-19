import { MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl m-5 text-center font-bold">Contact Me</h1>
      <div className="w-full bg-base-200">
        <div className="flex flex-col md:flex-row ">
          <div className="text-center lg:text-left w-2/3 mx-10 my-10">
            <h1 className="text-4xl font-bold my-8">Get In Touch!</h1>
            <div className="flex items-center ">
              <MdEmail />
              <p>akramulhasan66@gmail.com</p>
            </div>
            <div className="flex items-center my-5">
              <BsPhone />
              <p> +8801905445315</p>
            </div>
            <div className="flex items-center">
              <ImLocation />
              <p >Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100 mx-10 my-10">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
