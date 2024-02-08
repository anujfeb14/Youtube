import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <>
      <div
        className={`m-4 p-2 w-96 h-96 rounded-lg border border-black" ${
          isDarkTheme ? "bg-black text-white" : "bg-orange-200 text-black"
        }`}
      >
        <div>
          <button
            className="my-5 p-2 bg-fuchsia-400 rounded-lg"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            ToggleTheme
          </button>
        </div>
        <div>
          <input
            className="border border-black w-72 px-2 text-black"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
        </div>
      </div>
    </>
  );
};

export default Demo;
