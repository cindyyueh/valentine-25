'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {

  const MyRouter = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/dancing-cat.webp"
          unoptimized
          alt="cat dancing"
          width={400}
          height={400}
          priority
        />
        <div className="question-text">
          <h1 className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            yay! i knew u would say yes &lt;3
          </h1>
          <h2 className="text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            lets get shabu!
          </h2>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
            onClick={() => {
              MyRouter.push('/')
            }}
          >
            back
          </a>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
