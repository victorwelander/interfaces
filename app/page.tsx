import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-6xl font-semibold">
          Interfaces.dev <span className="text-gray-1100">for sale</span>
        </h1>
        <p className="text-gray-1100 mt-4 text-3xl">
          write an email to{" "}
          <span className="text-gray-1200">
            {" "}
            <Link className="" href="mailto:contact@victorwelander.com">
              contact@victorwelander.com
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
