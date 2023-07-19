import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl m-5 text-center font-bold">My Projects</h1>
      <div className="bg-base-200 flex flex-col md:flex-row md:justify-center gap-10 py-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <div
              className="w-96 h-80 bg-gray-950 ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
              style={{ backgroundImage: "url(https://i.ibb.co/5LGDMTB/language-safari.png)" }}
            ></div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/language-safari-client">Client-side</a> 
              </button>
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/language-safari-server"> Server-side</a>
              </button>
              <button className="btn btn-sm btn-primary"><a href="https://language-safari.web.app/"> Live-link</a></button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <div
              className="w-96 h-80 bg-gray-950 ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
              style={{ backgroundImage: "url(https://i.ibb.co/PzJBQK6/humpty-dumpty-toys.png)" }}
            ></div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/humpty-dumpty-toys-client">Client-side</a> 
              </button>
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/humpty-dumpty-toys-server"> Server-side</a>
              </button>
              <button className="btn btn-sm btn-primary"><a href="https://humpty-dumpty-toys.web.app/"> Live-link</a></button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <div
              className="w-96 h-80 bg-gray-950 ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
              style={{ backgroundImage: "url(https://i.ibb.co/WsdJpxp/bangla-recipes.png)" }}
            ></div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/bangla-racipies-client">Client-side</a> 
              </button>
              <button className="btn btn-sm btn-primary">
                <BsGithub></BsGithub><a href="https://github.com/Akram-Ul-Hasan/bangla-recipies-server">Server-side</a> 
              </button>
              <button className="btn btn-sm btn-primary"><a href="https://assignment-10-bangla-recipes.web.app/">Live-link</a> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
