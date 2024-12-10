import React, { ReactNode, Dispatch, SetStateAction } from "react";

interface TextBoxProps {
  children: ReactNode;
  placeholder?: string;
  reviewContent: string;
  setReviewContent: Dispatch<SetStateAction<string>>;
}

function Textbox({
  children,
  placeholder,
  reviewContent,
  setReviewContent,
}: TextBoxProps) {
  return (
    <>
      <div className="relative w-full">
        <textarea
          className="bg-[hsl(50,21%,95%)] text-base border-[0.5px] border-gray-400 w-full h-auto min-h-[120px] px-2 py-2 font-spartan leading-tight focus:outline-none focus:border-black resize-none placeholder:text-gray-400 placeholder:text-sm"
          placeholder={placeholder}
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        />
        <div className="bg-[hsl(50,21%,95%)] px-2 text-[12px] absolute left-2 top-[-7px] font-spartan text-gray-500">
          {children}
        </div>
      </div>
    </>
  );
}

export default Textbox;
