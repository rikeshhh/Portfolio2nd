import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      header: "Website Design",
    },
    {
      id: 2,
      header: "Website Development",
    },
    {
      id: 3,
      header: "Mobile Development",
    },
    {
      id: 4,
      header: "Mobile App Interface ",
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
                className="h-48  box-shadow flex justify-center items-center rounded-md p-4"
              >
                <div className="flex">{item.header}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
