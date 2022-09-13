import { data } from "cypress/types/jquery";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import { WeekState } from "../../state/weekStat";

const Chart = ({ data }: { data: WeekState[] }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart margin={{ left: 20, right: 20 }} data={data}>
        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="value"
          stroke="#2564eb"
        />
        <XAxis interval={0} tickLine={false} axisLine={false} dataKey="day" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
