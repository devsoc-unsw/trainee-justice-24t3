"use client";
import { X } from "lucide-react";
import StarRating from "./StarRating";
import InputField from "./InputField";
import Textbox from "./Textbox";
import TagGroup from "./TagGroup";
import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ReviewSocietyModalProps {
  name: string;
  logo?: string;
  onClose: () => void;
}

function ReviewSocietyModal({
  name,
  logo = "https://cdn.linkupevents.com/arc_logo.png",
  onClose,
}: ReviewSocietyModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [reviewContent, setReviewContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (rating !== 0 || reviewTitle !== "" || reviewContent !== "") {
      setErrorMsg("");
    }
  }, [reviewTitle, reviewContent, rating]);

  const handleSubmit = () => {
    let error = "";

    if (rating === 0) {
      error = "Select a rating";
    } else if (reviewTitle === "") {
      error = "Title cannot be empty";
    } else if (reviewContent === "") {
      error = "Review cannot be empty";
    }

    setErrorMsg(error);

    if (error !== "") {
      return;
    }

    onClose();
    // submit review with info
    console.log(reviewTitle);
    console.log(reviewContent);
    console.log(rating);
    console.log(tags);
    console.log(anonymous);
    console.log(new Date());
  };

  return (
    <>
      {/* container */}
      <div className="bg-[hsl(50,21%,95%)] h-auto w-auto max-w-[800px] rounded-lg">
        {/* outer flex */}
        <div className="flex flex-col pb-6">
          {/* header */}
          <div className="flex flex-col bg-[hsl(30,9%,17%)] p-2 rounded-t-md">
            <div className="flex justify-between items-center mb-1">
              <div className="font-lalezar text-[hsl(50,21%,95%)] text-2xl pl-4">
                Submit Review
              </div>
              <button onClick={onClose}>
                <X size="30" strokeWidth="0.5" color="hsl(50,21%,95%)" />
              </button>
            </div>
            <hr></hr>
            {/* profile div */}
            <div className="flex flex-row items-center pl-5 pt-3 gap-4 pb-2">
              <Image
                width={70}
                height={70}
                alt="society logo"
                src={logo}
                className="rounded-full"
              />
              <div className="flex flex-col leading-none pt-2">
                <div className="font-lalezar text-[hsl(50,21%,95%)] text-4xl">
                  {name}
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col items-center justify-center px-16 gap-4 bg-[hsl(50,21%,95%)]">
            <div className="pt-10 pb-3">
              <StarRating rating={rating} setRating={setRating} />
            </div>
            <InputField
              reviewTitle={reviewTitle}
              setReviewTitle={setReviewTitle}
              placeholder="Enter review title..."
            >
              Title
            </InputField>
            <Textbox
              reviewContent={reviewContent}
              setReviewContent={setReviewContent}
              placeholder="Enter review..."
            >
              Review
            </Textbox>
            <TagGroup tags={tags} setTags={setTags} />
            <div className="flex items-center gap-2 self-start pl-1 pt-1">
              <input
                type="checkbox"
                id="anonymous"
                onClick={() => {
                  setAnonymous((anonymous) => !anonymous);
                }}
              />
              <label className="font-spartan text-sm font-bold">
                Display Anonymously
              </label>
            </div>
            <div className="flex self-end">
              <p className="font-spartan text-lg mr-10 mt-2 text-red-700 font-semibold">
                {errorMsg}
              </p>
              <div>
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewSocietyModal;

// ChatGPT generated test page.tsx example of opening and closing modal:
// "use client";

// import { useState } from "react";
// import ReviewSocietyModal from "@/components/ReviewSocietyModal";

// export default function Test() {
//   const [isOpen, setIsOpen] = useState(false); // Controls modal visibility
//   const [isAnimating, setIsAnimating] = useState(false); // Controls animation state

//   const handleOpenModal = () => {
//     setIsOpen(true);
//     setIsAnimating(true);

//     // Prevent background scrolling
//     document.body.style.overflow = "hidden";
//   };

//   const handleCloseModal = () => {
//     setIsAnimating(false); // Trigger reverse animation
//     setTimeout(() => {
//       setIsOpen(false);
//       // Restore background scrolling
//       document.body.style.overflow = "auto";
//     }, 300); // Wait for animation to complete before hiding
//   };

//   return (
//     <>
//       <div className="sticky top-0 h-full flex items-center justify-center">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//           onClick={handleOpenModal}
//         >
//           Open Modal
//         </button>

//         {isOpen && (
//           <div
//             className={`fixed inset-0 z-50 overflow-y-scroll transition-opacity duration-300 ${
//               isAnimating ? "bg-opacity-50 bg-black" : "bg-opacity-0"
//             }`}
//             onClick={handleCloseModal} // Close modal on background click
//           >
//             <div
//               className={`flex items-center justify-center min-h-full py-4`}
//               onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
//             >
//               <div
//                 className={`rounded-lg shadow-md ${
//                   isAnimating ? "animate-fade-in" : "animate-fade-out"
//                 }`}
//               >
//                 <div className="">
//                   <ReviewSocietyModal
//                     name="DevSoc"
//                     numReviews={420}
//                     avgRating="Overwhelmingly Positive"
//                     logo="https://cdn.linkupevents.com/society/Software+Development+Society.png"
//                     onClose={handleCloseModal}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add styles for animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes fade-out {
//           from {
//             opacity: 1;
//             transform: scale(1);
//           }
//           to {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }

//         .animate-fade-out {
//           animation: fade-out 0.3s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }
