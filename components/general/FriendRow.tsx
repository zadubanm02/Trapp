import React from "react";

interface RowProps {
  name: string;
  value: number;
  me?: boolean;
}

const FriendRow = ({ name, value, me }: RowProps) => {
  const colorValue = (value: number): string => {
    if (me) {
      return "bg-white";
    }
    if (value == 0) {
      return "bg-amber-200";
    }
    if (value > 0) {
      return "bg-emerald-100";
    }
    return "bg-red-200";
  };
  return (
    <div
      className={`flex py-2 px-2 flex-row justify-between rounded-xl items-center ${
        me && "bg-blue-600"
      }`}
    >
      <h3 className={`font-semibold text-lg ${me && "text-white"}`}>{name}</h3>
      <span className={`py-2 px-4 rounded-full ${colorValue(value)} font-bold`}>
        {value}
      </span>
    </div>
  );
};

export default FriendRow;
