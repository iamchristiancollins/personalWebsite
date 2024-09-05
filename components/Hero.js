import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import userData from "@constants/data";

export default function Hero() {
  const colors = [
    "#FFD700",
    "#FF1493",
    "#1E90FF",
    "#228B22",
    "#FF4500",
    "#9400D3",
  ];
  return (
    <section className="hero dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-32">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {userData.name}
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 my-4">
            {userData.designation}{" "}
            <a
              href={`
                        mailto:${userData.email}?subject=Mail from your website`}
              className="text-indigo-500"
            >
              {userData.email}
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href={`
                        mailto:${userData.email}?subject=Mail from your website`}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded"
            >
              Get In Touch
            </a>
            <a
              href={userData.resumeUrl}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-80 h-80 relative mt-10 md:mt-0">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-80 h-80 object-cover rounded-full"
          />
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="underline"
              color={colors[Math.floor(Math.random() * colors.length)]}
            >
              <div className="absolute w-80 h-80 top-0 left-0 z-0"></div>
            </RoughNotation>
          </RoughNotationGroup>
        </div>
      </div>
    </section>
  );
}
