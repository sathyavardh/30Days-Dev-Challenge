import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

interface Props {
  data: { activity: string; hours: number }[];
}

const TimeChart = ({ data }: Props) => {
  console.log(data);
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#A78BFA",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#C9CBCF",
  ];
  const chartData = {
    labels: data.map((el) => el.activity),
    datasets: [
      {
        label: "Hours",
        data: data.map((el) => el.hours),
        backgroundColor: data.map((_, i) => colors[i % colors.length]),
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie data={chartData} />
    </>
  );
};

export default TimeChart;
