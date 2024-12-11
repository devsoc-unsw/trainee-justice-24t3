import classNames from "classnames";
import React, { ReactNode, Dispatch, SetStateAction, useState } from "react";

interface TagProps {
  children: ReactNode;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

function Tag({ children, tags, setTags }: TagProps) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (tags.length >= 3) {
      return;
    }
    if (children) {
      setTags((prevTags) => [...prevTags, children.toString()]);
    }

    setSelected(true);
  };

  const handleUnselect = () => {
    if (children) {
      setTags((prevTags) =>
        prevTags.filter((tag) => tag !== children.toString())
      );
    }
    setSelected(false);
  };

  const tagClass = classNames({
    "px-4 py-1 text-sm font-spartan rounded-3xl border-[1.5px]": true,
    "bg-[hsl(85,49%,40%)] text-[hsl(50,21%,95%)] border-[hsl(85,49%,40%)]":
      selected,
    "bg-[hsl(50,21%,95%)] text-[hsl(30,9%,17%)] border-[hsl(30,9%,17%)]":
      !selected,
  });

  return (
    <>
      <div>
        {selected ? (
          <button type="button" className={tagClass} onClick={handleUnselect}>
            {children}
          </button>
        ) : (
          <button type="button" className={tagClass} onClick={handleSelect}>
            {children}
          </button>
        )}
      </div>
    </>
  );
}

export default Tag;
