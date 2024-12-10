import { MdEmail } from "react-icons/md";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";
import Chip from "@/components/Chip";
import { createRipple } from "@/components/Button";
import { SquarePen } from "lucide-react";
import Review from "@/components/Review";
import Rating from "@/components/Rating";

export default function SocietyPage() {
  const Top3tags = ["Engaging", "Friendly", "Epic"];
  const avgStar = 4.5;
  const percentage = ((avgStar / 5) * 100).toFixed(1) + "%";
  const reviews = 12;
  const websiteUrl = "https://unswavsoc.com";
  const facebookUrl = "https://www.facebook.com/DataSoc";
  const discordUrl = "https://discord.gg/CWnTGNZzKU";
  const emailUrl = "unsw@180dc.org";
  const instagramUrl = "https://instagram.com/aiesecinunsw";

  return (
    <>
      <Image
        priority
        src={"/assets/wave.svg"}
        alt="Green Wave"
        className="pointer-events-none select-none"
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="grid grid-cols-2 w-full px-20 gap-20 font-spartan">
        <div className="flex flex-col sticky top-0 pt-10 rounded-lg max-h-screen overflow-auto">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-3 basis-2/12 items-center">
              <Image
                priority
                src={"https://cdn.linkupevents.com/arc_logo.png"}
                alt="Society Logo"
                className="rounded-full"
                width={140}
                height={120}
              />
              <div className="flex justify-center items-center gap-2 flex-wrap w-24">
                {discordUrl && (
                  <a
                    href={discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord size={"1.5em"} className="cursor-pointer" />
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={"1.5em"} className="cursor-pointer" />
                  </a>
                )}
                {emailUrl && (
                  <a
                    href={`mailto:${emailUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail size={"1.5em"} className="cursor-pointer" />
                  </a>
                )}
                {facebookUrl && (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={"1.5em"} className="cursor-pointer" />
                  </a>
                )}
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGlobal
                      size={"1.5em"}
                      className="cursor-pointer"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col basis-9/12">
              <h1 className="text-4xl font-lalezar">
                Software Development Society
              </h1>
              <div className="flex flex-row gap-0.5">
                <Rating percentage={percentage} />
                <p className="text-sm text-slate-800 px-1 pt-1">
                  {reviews} Reviews
                </p>
              </div>
              <p className="text-lg line-clamp-10">
                We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you&apos;ll find over five teams of enthusiastic students
                diligently working on a wide array of web apps, ranging from
                academic degree planners to platforms that display available
                campus facilities. Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-lalezar">Top 3 Tags</h2>
            <div className="flex flex-row gap-8 mt-2">
              {Top3tags.map((tag, index) => (
                <Chip variant="top3" key={index}>
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-5 pt-10">
          <div className="flex justify-between pb-4">
            <div className="flex items-center">
              <h1 className="text-4xl font-lalezar">Reviews</h1>
            </div>
            <button
              className="flex gap-1 bg-lightGreen px-4 py-2 rounded-lg relative overflow-hidden text-xl font-lalezar"
              onClick={createRipple}
            >
              <SquarePen /> Add Review
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <Review
              anonymous={false}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              tags={["Engaging", "Friendly", "Epic"]}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines.
                
                
                "
            />
            <Review
              anonymous={false}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines."
            />
            <Review
              anonymous={false}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines."
            />
            <Review
              anonymous={false}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines."
            />
            <Review
              anonymous={false}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines."
            />
            <Review
              anonymous={true}
              username="z5583784"
              title="Best society ever"
              starRating={4}
              date={new Date()}
              reviewContent=" We are the Software Development Society, a place for imaginative
                and inventive students dedicated to crafting exceptional
                products for the benefit of the community! Within our society,
                you'll find over five teams of enthusiastic students diligently
                working on a wide array of web apps, ranging from academic
                degree planners to platforms that display available campus
                facilities. 
                


                Our primary goal is to develop solutions that
                enhance the lives of university students in their daily
                routines."
            />
          </div>
        </div>
      </div>
    </>
  );
}
