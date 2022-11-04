import React from "react";

import { data1 } from '../../components/QuizResult'
import { ChartsHeader, Pie as PieChart } from "../../components";

const Pie = () => {
  const data1 = [
    { x: "Incubation", y: 5000, text:"5" },
    { x: "Team", y: 2000, text:"2" },
    { x: "Programming", y: 1000, text:"1" },
  ];
  const pieChartData = [
    { x: "Incubation", y: 18, text: "18%" },
    { x: "Team", y: 8, text: "8%" },
    { x: "Programming", y: 15, text: "15%" },
    { x: "License", y: 11, text: "11%" },
    { x: "Facilities", y: 18, text: "18%" },
    { x: "Taxes", y: 14, text: "14%" },
    { x: "Insurance", y: 16, text: "16%" },
  ];

  return (
    <div 
    // className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart id="chart-pie" data={data1} legendVisiblity height="full" color="#b7cddb"/>
      </div>
    </div>
  );
};

export default Pie;
