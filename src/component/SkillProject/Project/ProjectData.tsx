import { useEffect, useState } from "react";
import axios from 'axios'
interface Repo {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
  html_url: string; 
}

const ProjectData =()=>{
const [userData,setUserData] =useState<Repo[]>([]);
// const [displayCount,setDisplayCount]=useState(3);
const fetcUserData =async()=>{
  try{
    const userResponse = await axios.get<Repo[]>('https://api.github.com/users/rikeshhh/repos');
    setUserData(userResponse.data,);
  }catch(error){
    console.log("error fetching data",error);
  }
}
const handlick =(repoUrl:string)=>{
  window.location.href= repoUrl;
}
useEffect(() => {
 fetcUserData();
}, [])

  return (
    <section>
      <div className="main-container">
      <div className="flex flex-col" >
<div className="grid grid-cols-3 text-white  gap-8  relative max-sm:grid-cols-1 justify-center items-center">
{userData.slice(0,8).map((item:Repo)=>(
  <div key={item.id} className="w-60 h-auto border rounded-lg flex justify-center items-center flex-col p-4 gap-4">
    <figure>
      <img src={item.owner.avatar_url} alt="" className="max-w-full max-h-full"/>
    </figure>
    <h1>{item.name}</h1>
    <div>

    <button onClick={()=>handlick(item.html_url)} className="border p-2 rounded-md">View</button>
    </div>
  </div>
))}
</div>
    </div>
      </div>
    </section>
  )
}
export default ProjectData
