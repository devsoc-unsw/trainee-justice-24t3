import Image from "next/image";
import SearchBar from "../components/SearchBar";
import { ReviewCard } from "@/components/ReviewCard";
import DropdownSelect, { DropdownItem } from "@/components/DropdownSelect";

export default function Home() {
  const sortSocietiesData: DropdownItem[] = [
    {
      id: 'A-Z',
      name: 'Alphabetical (A-Z)',
    },
    {
      id: 'Z-A',
      name: 'Alphabetical (Z-A)',
    },
    {
      id: 'Rating(H-L)',
      name: 'Rating (High to Low)',
    },
    {
      id: 'Rating(L-H)',
      name: 'Rating (Low to High)',
    },
  ];

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
      <div className="flex flex-col items-center">
        <div className="w-5/6">
          <p className="font-lalezar text-xl md:text-sm">
            Team Justice Introduces
          </p>
          <h1 className="font-lalezar text-8xl text-textGreen leading-none md:text-5xl">
            SparcHub
          </h1>
          <p className="font-lalezar text-2xl md:text-lg">
            Your go-to destination for UNSW society reviews and insights.
          </p>
          <div className="flex justify-center items-center mt-10 mb-10 gap-4">
            <SearchBar />
            <DropdownSelect
              id="sort-societies"
              data={sortSocietiesData}
              width="260px"
              title="Sort by"
            />
          </div>
          <div className="grid grid-cols-3 gap-7 1xl:grid-cols-2 landmd:grid-cols-1 mb-6">
            <ReviewCard
              avgStar={2.5}
              reviews={12}
              title="Australasian Union of Jewish Students studentsstudents students students students students"
              logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
              tags={["Development", "Based", "Cool"]}
              description="Epic society about des! Epic society about des! Epic society about des! Epic society about des! Epic society about des! Epic society about des!"
            />
            <ReviewCard
              avgStar={2.5}
              reviews={12}
              title="Australasian Union of Jewish Students"
              logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
              tags={["Developmentt", "Developmentt", "Developmentt"]}
              description="Epic society about des!"
            />
            <ReviewCard
              avgStar={2.5}
              reviews={12}
              title="Australasian Union of Jewish Students"
              logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
              tags={["Developmentt", "Developmentt", "Developmentt"]}
              description="Epic society about des!"
            />
            <ReviewCard
              avgStar={2}
              reviews={12}
              title="Albury Wodonga Medical "
              logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
              tags={["Development", "Based", "Cool"]}
              description="The club strives to offer a welcoming setting to a diverse collection of students so they can ask the questions that everyone has and that are essential to comprehending life itself."
            />
            <ReviewCard
              avgStar={2}
              reviews={12}
              title="Australasian Union of Jewish s"
              logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
              tags={["Development", "Based", "Cool"]}
              description="Epdeveloping your favorite websit your favorite websites!Epic society about developing your favorite websites!"
            />
          </div>
        </div>
      </div>
    </>
  );
}
