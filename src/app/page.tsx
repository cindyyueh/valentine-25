import Image from "next/image";
import YesButton from "./components/YesButton";
import NoButton from "./components/NoButton";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/cat-flowers.jpg"
          unoptimized
          alt="cat holding flowers"
          width={400}
          height={100}
          priority
        />
        <div className="question-text">
          <h1 className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            john, will u be my valentine?
          </h1>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <YesButton/>

          <NoButton/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center ">
        ( ˙꒳​˙ ) 
        <div className="text-sm font-[family-name:var(--font-geist-mono)]">
          by cindy 
        </div>
      </footer>
    </div>
  );
}
