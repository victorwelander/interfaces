import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-gray-1200 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Interfaces.dev <span className="text-gray-900">is for sale</span>
        </h1>
        <p className="text-gray-1100 mt-4 max-w-md">
          Interested in purchasing this domain? Get in touch via{" "}
          <Link href="mailto:contact@victorwelander.com">
            contact@victorwelander.com
          </Link>{" "}
          or reach out on <Link href="https://x.com/victorwelander_">X</Link>.
        </p>
      </div>
    </div>
  );
}

/* 
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-gray-1200 max-w-4xl text-4xl/9 font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Interfaces.dev <span className="text-gray-900">for sale</span>
        </h1>
        <p className="mt-3 max-w-md">
          If you are interested in buying the domain please write an email to{" "}
          <Link href="mailto:contact@victorwelander.com">
            contact@victorwelander.com
          </Link>
          or contact me via <Link href="https://x.com/victorwelander_">X</Link>
        </p>
      </div>
    </div>
*/
