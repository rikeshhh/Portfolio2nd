import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import penguin from "../assets/penguin-42936_640.png"
const HeroSection = () => {
  return (
    <section className="w-full relative flex font-Poppins">
        <div className="flex flex-col ">
 <div className=" flex flex-col border-indigo-400 border-b-2 text-left text-lg max-w-lg gap-4">
 <div className="text-4xl font-normal">I'm</div>
    <h1 className="text-6xl font-semibold">Rikesh Shrestha</h1>
    <p>
        A freelancer who provides services for digital performing and design content needs, for all business with more than 1- years of experience
    </p>
 </div>
        </div>
        <div className="w-96 border rounded-full bg-gray-500 relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img src={penguin} alt="" className="absolute -top-6 " />
        </div>
      <div className="flex flex-col justify-start">
       <div className="flex items-start flex-col text-center ">
        <div>Services</div>
       <p className="font-light">
          Lets build quality products in programming and design with my servoces
        </p>
        <button>Show more</button>
       </div>
        <div className="flex justify-start items-center">
          <button>
            <CiFacebook />
          </button>
          <button>
            <CiInstagram />
          </button>
          <button>
            <CiTwitter />
          </button>
          <button>
            <CiLinkedin />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
