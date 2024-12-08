import Image from "next/image";

export default function Terms() {
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
      <div className="flex flex-col justify-center items-center mb-10 font-spartan">
        <div className="flex gap-3 flex-col w-3/6 ">
          <h1 className="text-6xl font-lalezar text-textGreen text-center">
            Terms and Conditions
          </h1>
          <section>
            <h2 className="text-2xl font-lalezar text-textGreen">
              1. Disclaimer
            </h2>
            <p className="text-lg">
              SparcHub is an independent project created by individuals and is
              not affiliated, endorsed, or associated in any way with the
              University of New South Wales (UNSW). The views, opinions, and
              content shared on this platform are solely those of the users and
              creators and do not reflect the opinions or policies of UNSW or Arc.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-lalezar text-textGreen">
              2. Account Creation
            </h2>
            <p className="text-lg">
              As part of the account creation process, we collect and verify
              information your university email address to confirm your student
              status. If you are unable to verify your university student
              status, you will not be permitted to create an account and create
              reviews.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-lalezar text-textGreen">
              3. Community Guidelines
            </h2>
            <p className="text-lg">
              To maintain a respectful and useful platform:
            </p>
            <ul className="text-lg list-disc pl-10">
              <li>Do not post false or misleading reviews.</li>
              <li> Avoid using offensive language.</li>
              <li>Refrain from personal attacks or hate speech.</li>
              <li>
                We reserve the right to remove any content and terminate any
                account that violates these guidelines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-lalezar text-textGreen">
              4. Acceptance
            </h2>
            <p className="text-lg">
              By creating an account, accessing, or using SparcHub, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and our Privacy Policy. If you do not agree, please
              do not use the app.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-lalezar text-textGreen">5. Credits</h2>
            <p className="text-lg">
              Inspiration taken from{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://unilectives.devsoc.app/"
              >
                Unilectives
              </a>
              . Created as part of training program hosted by the Software
              Development Society at UNSW. Shoutout to{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/TAS-scorchedshadow"
              >
                Dylan
              </a>{" "}
              and{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/crocyoiin"
              >
                Nicole
              </a>{" "}
              for organising the program. Created by Team Justice comprised of{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/xleonx0x"
              >
                Chris
              </a>
              ,{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/dzl-i"
              >
                Denzel
              </a>
              ,{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/DickoEvaldo"
              >
                Dicko
              </a>
              ,{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/lalkobi"
              >
                Liam
              </a>
              , and{" "}
              <a
                className="text-textGreen font-semibold"
                href="https://github.com/seebcode"
              >
                Seb
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
