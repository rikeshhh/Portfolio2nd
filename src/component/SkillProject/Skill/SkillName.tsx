    import Data from "../../../Datas.js"
const SkillName = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-96 max-sm:grid-cols-1 max-sm:w-auto"> 
      
        {Data.map((item)=>(
            <div className={`flex flex-col justify-center items-center py-2 px-4  h-[69px] max-sm:w-52 ${item.color} border rounded-xl`} key={item.id}>
<p>{item.name}</p>
<span>{item.percent}%</span>
            </div>
        ))}
      </div>
  )
}

export default SkillName
