import Image from "next/image";
import Chip from "./Chip";
import Link from "next/link";
import Rating from "./Rating";

interface ReviewCardProps {
  title: string;
  description: string;
  logo?: string;
  tags?: string[];
  avgStar: number;
  reviews: number;
}

export function ReviewCard({
  title = "",
  description = "",
  logo = "https://cdn.linkupevents.com/arc_logo.png",
  tags = [],
  avgStar = 0,
  reviews = 0,
}: ReviewCardProps) {
  const percentage = ((avgStar / 5) * 100).toFixed(1) + "%";

  return (
    <Link href={`/society/${encodeURIComponent(title)}`}>
      <div className="bg-white shadow-xl p-5 rounded-xl md:basis-full basis-cardWidth flex flex-col justify-between cursor-pointer h-64 sm:h-52 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
        <div className="flex gap-4">
          <div className="basis-3/12 landmd:basis-2/12 sm:basis-4/12">
            <Image
              width={300}
              height={300}
              alt="society logo"
              src={logo}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-col basis-9/12">
            <div className="font-lalezar flex flex-col justify-between">
              <h1 className="text-xl line-clamp-2">{title}</h1>
              <div className="flex gap-1">
                <div className="flex gap-0.5">
                  <Rating percentage={percentage} />
                </div>
                <p className="text-sm text-slate-800 px-1 pt-1">({reviews})</p>
              </div>
            </div>
            <hr className="bg-black h-0.5 mb-2" />
            <p className="font-spartan text-md line-clamp-3">{description}</p>
          </div>
        </div>
        <div className="flex gap-3 sm:hidden justify-center">
          {tags.map((tag, index) => (
            <div key={index} className="flex basis-chipWidth">
              <Chip variant="landingPage">{tag}</Chip>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
