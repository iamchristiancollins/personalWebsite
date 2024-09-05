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
                        mailto:${userData.email}?subject=Mail%20from%20your%20website`}
            target="_blank"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded"
          >
            Get In Touch
          </a>
          <a
            href={userData.resumeUrl}
            target="_blank"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-80 h-80 relative mt-10 md:mt-0">
        <img src={userData.avatarUrl} alt="avatar" className="shadow" />

        <div className="hidden lg:block relative mt-10 md:mt-0 md:ml-10">
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
