import { useEffect, useState } from "react";
import axios from "axios";
interface Repo {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
  html_url: string;
}

const ProjectData = () => {
  const [userData, setUserData] = useState<Repo[]>([]);
  // const [displayCount,setDisplayCount]=useState(3);
  const fetcUserData = async () => {
    try {
      const userResponse = await axios.get<Repo[]>(
        "https://api.github.com/users/rikeshhh/repos"
      );
      setUserData(userResponse.data);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };
  // const handlick = (repoUrl: string) => {
  //   window.location.href = repoUrl;
  // };
  useEffect(() => {
    fetcUserData();
  }, []);

  return (
    <section>
      <div className="main-container">
        <div className="flex flex-col">
          <div className="grid text-white  gap-12  relative grid-cols-1 justify-center items-center">
            {userData.slice(0, 4).map((item: Repo) => (
              <div
                key={item.id}
                className="flex h-auto border rounded-lg justify-center items-center  p-4 gap-4 max-sm:flex-col box-shadow "
              >
                <div className="flex flex-col justify-center items-center p-2 ">
                  <figure>
                    <img
                      src={item.owner.avatar_url}
                      alt=""
                      className="max-w-full max-h-full max-sm:w-auot"
                    />
                  </figure>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                  <h5>{item.name}</h5>
                  <div className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quia consequatur provident nam officia dicta, iusto
                    eos modi impedit nihil debitis! Iste tempora ipsam provident
                    voluptatem quo, reiciendis delectus porro.
                  </div>
                  <div>
                    <a
                     href={item.html_url}
                     target="_blank"
                      className="border p-2 rounded-md"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectData;
