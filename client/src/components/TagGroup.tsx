import Tag from "@/components/Tag";
import React, { Dispatch, SetStateAction } from "react";

interface TagGroupProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const tagValues = [
  "Inclusive",
  "Fun",
  "Diverse",
  "Friendly",
  "Professional",
  "Academic",
  "Supportive",
  "League of Legends",
  "Networking",
  "Creative",
  "Helpful",
  "Community",
  "Cultural",
  "Unique",
  "Teamwork",
  "Leadership",
  "First-Year-friendly",
  "Organized",
  "Quirky",
  "Spicy",
  "Meme-worthy",
  "Karaoke",
  "Educational",
  "Chaotic",
  "Free food",
  "Wholesome",
  "Crafty",
  "Costumes",
  "Gamers",
  "💀💀💀",
];

function TagGroup({ tags, setTags }: TagGroupProps) {
  return (
    <>
      <div className="relative w-full">
        <div className="relative">
          <div className="flex flex-wrap gap-2 bg-[hsl(50,21%,95%)] border-[0.5px] border-gray-400 w-full p-3 font-spartan leading-tight">
            {/* Tags go here!!! */}
            {tagValues.map((value, index) => (
              <Tag key={index} tags={tags} setTags={setTags}>
                {value}
              </Tag>
            ))}
          </div>
          <div className="bg-[hsl(50,21%,95%)] px-2 text-[12px] absolute left-2 -top-2 font-spartan text-gray-500">
            Tags - Pick up to 3
          </div>
        </div>
      </div>
    </>
  );
}

export default TagGroup;
