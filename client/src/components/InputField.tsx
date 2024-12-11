import React, { ReactNode, Dispatch, SetStateAction } from "react";

interface InputFieldProps {
  children: ReactNode;
  placeholder?: string;
  reviewTitle: string;
  setReviewTitle: Dispatch<SetStateAction<string>>;
}

function InputField({
  children,
  placeholder = "",
  reviewTitle,
  setReviewTitle,
}: InputFieldProps) {
  return (
    <>
      <div className="relative w-full">
        <input
          className="bg-[hsl(50,21%,95%)] text-base border-[0.5px] border-gray-400 w-full h-10 px-2 font-spartan leading-tight focus:outline-none focus:border-black placeholder:text-gray-400 placeholder:text-sm"
          type="text"
          placeholder={placeholder}
          value={reviewTitle}
          onChange={(e) => setReviewTitle(e.target.value)}
          maxLength={100}
        />
        <div className="bg-[hsl(50,21%,95%)] px-2 text-[12px] absolute left-2 bottom-7 font-spartan text-gray-500">
          {children}
        </div>
      </div>
    </>
  );
}

export default InputField;
