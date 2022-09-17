import { data } from "cypress/types/jquery";
import useTheme from "next-theme";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import { WeekState } from "../../state/weekStat";

const getStroke = (theme: string) => {
  if (theme == "light") {
    return "#2564eb";
  }
  return "#fff";
};

const getAxis = (theme: string) => {
  if (theme == "light") {
    return "#374151";
  }
  return "#fff";
};

const getContentColor = (theme: string) => {
  if (theme == "light") {
    return "#fff";
  }
  return "#374151";
};

const Chart = ({ data }: { data: WeekState[] }) => {
  const { theme } = useTheme();
  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart margin={{ left: 20, right: 20 }} data={data}>
        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="value"
          stroke={getStroke(theme)}
        />
        <XAxis
          stroke={getAxis(theme)}
          interval={0}
          tickLine={false}
          axisLine={false}
          dataKey="day"
        />
        <Tooltip
          contentStyle={{
            color: getAxis(theme),
            backgroundColor: getContentColor(theme),
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
