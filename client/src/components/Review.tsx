import Image from "next/image";
import Chip from "./Chip";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";

interface ReviewProps {
  username: string;
  profilePic?: string;
  title: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  reviewContent: string;
  date: Date;
  anonymous: boolean;
  tags?: string[];
  variant?: string;
}

function Review({
  username,
  profilePic = "https://images.nightcafe.studio//assets/profile.png",
  title,
  starRating,
  reviewContent,
  date,
  anonymous,
  tags,
  variant = "default",
}: ReviewProps) {
  const percentage = (starRating / 5) * 100 + "%";

  return (
    <>
      {/* Container */}
      <div className="bg-white rounded-2xl p-6 shadow-lg min-w-[320px]">
        {/* Outer Flex */}
        <div className="flex flex-col gap-2">
          {/* Profile and Stars*/}
          <div className="flex justify-between">
            {/* Profile */}
            <div className="flex flex-row gap-4">
              <Image
                width={60}
                height={60}
                alt="User profile picture"
                src={profilePic}
                className="rounded-full"
              />
              <div className="flex flex-col leading-none pt-1">
                {/* Title */}
                <div className="font-lalezar text-2xl">{title}</div>
                <div className="font-lalezar text-sm">
                  Posted on {format(date, "dd MMMM yyyy")}
                </div>
              </div>
            </div>
            {/* Stars */}
            <div className="relative inline-block text-slate-400">
              <p className="text-[30px]">★★★★★</p>
              <p
                className="text-[30px] bg-[#299800] bg-clip-text absolute inset-0 text-transparent"
                style={{ width: percentage }}
              >
                ★★★★★
              </p>
            </div>
          </div>
          <div className="text-sm text-slate-500 font-spartan">
            Reviewed by: {anonymous ? "Anonymous" : username}
          </div>
          {/* Review Content*/}
          <div className="font-spartan leading-tight text-lg my-2">
            {reviewContent}
          </div>
          {/* Tags */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              {tags?.slice(0, 3).map((tag, index) => (
                <Chip variant="default" key={index}>
                  {tag}
                </Chip>
              ))}
            </div>
            <div className="flex gap-3">
              {variant === "profile" && (
                <Pencil className="cursor-not-allowed" />
              )}
              {variant === "profile" && (
                <Trash2 className="cursor-not-allowed" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
