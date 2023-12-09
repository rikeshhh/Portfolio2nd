    import Data from "../../../Datas.js"
const SkillName = () => {
  return (
    <div className="grid grid-cols-2 gap-4 "> 
      
        {Data.map((item)=>(
            <div className={`flex flex-col justify-center items-center py-2 px-4 w-60 h-[69px] max-sm:w-full ${item.color} border rounded-xl`} key={item.id}>
<p>{item.name}</p>
<span>{item.percent}%</span>
            </div>
        ))}
      </div>
  )
}

export default SkillName
