import React from "react";

export interface InternalFriend {
  name: string;
  email: string;
  value: number;
}

interface RowProps {
  name: string;
  email: string;
  value: number;
  // clickHandler?: React.Dispatch<
  //   React.SetStateAction<InternalFriend | undefined>
  // >;
  clickHandler?: () => void;
}

const getColor = (value: number) => {
  if (value === 0) return `border-sky-500`;
  if (value > 0) return `border-green-500`;
  return `border-rose-500`;
};

const RowFriend = ({ name, email, value, clickHandler }: RowProps) => {
  return (
    <div
      onClick={clickHandler}
      className="flex flex-row justify-between items-center my-2 cursor-pointer hover:bg-gray-100 rounded-lg"
    >
      <div className="flex flex-row">
        <span
          className={`border-l-8 border-solid ${getColor(
            value
          )} mr-3 rounded-lg`}
        ></span>
        <div>
          <h2 className="text-gray-700 font-bold text-lg">{name}</h2>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>
      <p className="font-bold text-2xl">{value}</p>
    </div>
  );
};

export default RowFriend;
