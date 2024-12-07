import Image from "next/image";
import Chip from "./Chip";
import { format } from "date-fns";

interface ReviewProps {
  username: string;
  profilePic?: string;
  title: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  reviewContent: string;
  date: Date;
  anonymous: boolean;
  tags?: string[];
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
}: ReviewProps) {
  const percentage = (starRating / 5) * 100 + "%";

  return (
    <>
      {/* Container */}
      <div className="bg-white rounded-lg border-2 px-6 pt-6 pb-4 shadow-md min-w-[320px]">
        {/* Outer Flex */}
        <div className="flex flex-col gap-2">
          {/* Profile and Stars*/}
          <div className="flex justify-between">
            {/* Profile */}
            <div className="flex flex-row gap-4">
              <Image
                width={60}
                height={75}
                alt="User profile picture"
                src={profilePic}
                className="rounded-full"
              />
              <div className="flex flex-col leading-none pt-1">
                <div className="font-lalezar text-2xl">
                  {anonymous ? "Anonymous" : username}
                </div>
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
          {/* Title */}
          <div className="font-lalezar text-xl">{title}</div>
          {/* Review Content*/}
          <div className="font-spartan leading-tight text-lg">
            {reviewContent}
          </div>
          {/* Tags */}
          <div className="flex gap-2">
            {tags?.slice(0, 3).map((tag, index) => (
              <Chip variant="default" key={index}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
