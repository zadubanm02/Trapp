import { useAtom } from "jotai";
import React from "react";
import { helpersStateAtom } from "../../state/helpersState";

const SundayInfoBanner = () => {
  const [visible, setVisible] = useAtom(helpersStateAtom);
  return (
    <div className="grid grid-cols-6 gap-8">
      <div></div>
      {/* Main Column for content */}
      <div className="col-span-4 rounded-lg bg-red-300 p-3 flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-700 text-lg">
            Pozor pondelok na obzore!
          </h1>
          <p className="text-md font-semibold text-gray-600">
            Posledné, čo naozaj chceš je ísť do nového týždňa so záporným
            číslom. Z toho sa potom ťažko vymotáva.
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="opacity-90"
          type="button"
        >
          <span className="sr-only"> Close </span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default SundayInfoBanner;
