    import Data from "../../../Datas.js"
    import { motion } from "framer-motion";

const SkillName = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <div className="grid grid-cols-2 gap-4 w-96 max-sm:grid-cols-1 max-sm:w-auto"> 
      
        {Data.map((item)=>(
            <div className={`flex flex-col relative justify-center items-center py-2 px-4 z-50 h-[69px] max-sm:w-52 ${item.color} border rounded-xl skill-shadow`} key={item.id}>

<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="tracking-[-0.02em] drop-shadow-sm   "
    >
{item.name} 
   </motion.h1>
   <motion.p
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="tracking-[-0.02em] drop-shadow-sm   "
    >
{item.percent} 
   </motion.p>

            </div>
        ))}
      </div>
  )
}

export default SkillName
