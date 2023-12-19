import React from "react";
import { FaMobile, FaLaptopCode } from "react-icons/fa";
const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      header: "Website Design",
      color: "bg-[#3ecd5e]",
      logo: <FaLaptopCode />,
      imageClass: "services__background",
    },
    {
      id: 2,
      header: "Website Development",
      color: "bg-[#e44002]",
      logo: <FaLaptopCode />,
      imageClass: "neu__background",
    },
    {
      id: 3,
      header: "Mobile Development",
      color: "bg-[#952aff]",
      logo: <FaMobile />,

      imageClass: "services__background",
    },
    {
      id: 4,
      header: "Mobile App Interface ",
      color: " bg-[#cd3e94]",
      logo: <FaMobile />,
      imageClass: "neu__background",
    },
  ];

  return (
    <section>
      <div className="main-container">
        <div className="flex flex-col justify-center items-center py-32">
          <h2 className="text-4xl font-black p-4 ">My Services</h2>
          <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1">
            {services.map((item) => (
              <div
                key={item.id}
                className={`h-48  box-shadow flex justify-center items-center rounded-md p-4 relative overflow-hidden group ${item.imageClass}
              `}>
                <div
                  className={`absolute ${item.color} top-0 -right-2 drop-shadow-2xl h-10 w-10 rounded-xl group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:transition-all group-hover:ease-in-out group-hover:duration-300`}
                >
                  <div className="flex justify-center items-center h-16 animate-bounce ">
                    {item.logo}
                  </div>
                </div>
                <div className="flex z-50 drop-shadow-2xl servicess font-black">{item.header}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
