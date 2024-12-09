import React, { ReactNode } from "react";

function InputField({ children, placeholder = "" }: { children: ReactNode, placeholder: string }) {
  return (
    <>
      <div className="relative w-full">
        <input
          className="bg-[hsl(50,21%,95%)] text-base border-[0.5px] border-gray-400 w-full h-10 px-2 font-spartan leading-tight focus:outline-none focus:border-black placeholder:text-gray-400 placeholder:text-sm"
          type="text"
          placeholder={placeholder}
        />
        <div
          className="bg-[hsl(50,21%,95%)] px-2 text-[12px] absolute left-2 bottom-7 font-spartan text-gray-500"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default InputField;
