import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import Datas from "../../../Datas.jsx"
ChartJs.register(ArcElement, Tooltip, Legend);
const Doughnuts = () => {
  const dataTwo = {
    labels: [
    ],
    datasets: [
      {
     
        data: Datas.map((item) => item.percent ),

        backgroundColor: [
          "#B22222",
          "#0A51A4",
          "#A6B222",
          "#068EB9",
          "#046F3C",
          "#B24D22",
          "#00ABE4",
          "#F2D4D6",
        ],
      },
    ],
    
  };
  const options = {
    cutout: 120,
  }
  const textCenter = {
    id:'textCenter',
    beforeDatasetsDraw(chart:any){
      const {ctx,chartArea:{top,width,height},}=chart;
      const fontHeight =16;
      ctx.save();
      ctx.font = `normal ${fontHeight}px Barlow Condensed`;
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("My Skills", width / 2, height / 2 + top + 30);
      ctx.restore();
    }
  }
  return (
  <div className="w-96 z-50 max-sm:w-80">
      <Doughnut
      data={dataTwo}
      options={options}
      plugins={[textCenter]}
    ></Doughnut>

  </div>
  );
};
  export default Doughnuts