import Review from "@/components/Review";
import Image from "next/image";
import converter from "number-to-words";

export default function Profile() {
  const fakeReviewDataArray = [
    {
      title: "Great Experience!",
      starRating: 5,
      date: new Date("2023-10-01"),
      tags: ["Helpful", "Friendly", "Organized"],
      reviewContent:
        "We are the Software Development Society, a place for imaginative and inventive students dedicated to crafting exceptional products for the benefit of the community! Within our society, you'll find over five teams of enthusiastic students diligently working on a wide array of web apps, ranging from academic degree planners to platforms that display available campus facilities. Our primary goal is to develop solutions that enhance the lives of university students in their daily routines.",
    },
    {
      title: "Amazing Society!",
      starRating: 4,
      date: new Date("2023-09-15"),
      tags: ["Engaging", "Friendly", "Epic"],
      reviewContent:
        "This society is amazing! The events are well-organized and the members are very friendly. I highly recommend joining!",
    },
    {
      title: "Good but can improve",
      starRating: 3,
      date: new Date("2023-08-20"),
      tags: ["Helpful", "Community"],
      reviewContent:
        "The society is good overall, but there are some areas that can be improved. The events are helpful, but sometimes they feel a bit disorganized.",
    },
  ];

  const userData = {
    zid: "z5583784",
    name: "Chris Wong",
    degree: "Computer Science",
    Year: 2,
    Description: "Happy to be here!",
  };

  const reviews = true;
  return (
    <div className={`flex flex-col ${!reviews && "h-screen"}`}>
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
      <div className="flex flex-col gap-3 px-20">
        <div className="flex items-center gap-4">
          <div>
            <Image
              priority
              src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg"
              alt="Green Wave"
              className="rounded-full"
              width={70}
              height={0}
            />
          </div>
          <h1 className="font-lalezar text-5xl text-textGreen">
            {userData.zid}
          </h1>
          <button className="flex gap-1 bg-lightGreen px-3 py-1 rounded-lg relative overflow-hidden text-2xl font-lalezar cursor-not-allowed">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col text-2xl font-spartan mb-8 mt-2">
          <p>
            <span className="font-semibold text-textGreen">Name:</span>{" "}
            {userData.name}
          </p>
          <p>
            <span className="font-semibold text-textGreen">Degree / Year:</span>{" "}
            {userData.degree} {converter.toOrdinal(userData.Year)} Year
          </p>
          <p>
            <span className="font-semibold text-textGreen">Description:</span>{" "}
            Happy to be here!
          </p>
        </div>
        <h1 className="font-lalezar text-textGreen text-4xl">Your Reviews</h1>
        {reviews && (
          <div className="grid grid-cols-1 gap-5 my-6">
            {fakeReviewDataArray.map((data, index) => (
              <Review
                key={index}
                variant="profile"
                anonymous={false}
                username="z5583784"
                title={data.title}
                starRating={data.starRating as 1 | 2 | 3 | 4 | 5}
                date={data.date}
                tags={data.tags}
                reviewContent={data.reviewContent}
              />
            ))}
          </div>
        )}
      </div>
      {!reviews && (
        <div className="text-4xl font-lalezar w-full h-full flex justify-center items-center">
          No reviews yet
        </div>
      )}
    </div>
  );
}
