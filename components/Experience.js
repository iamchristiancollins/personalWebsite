import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline"; // Import the icons
import data from "@constants/data";

export default function Experience() {
  return (
    <section className="bg-gray-800">
      <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-10 text-center lg:text-left">
        Experience
      </h1>

      <div className="w-full flex justify-center px-4 md:px-8">
        <div className="w-full max-w-[80%]">
          <Accordion
            selectionMode="multiple"
            className="flex flex-wrap gap-6 w-full"
          >
            {data.experience.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={`${item.title} | ${item.company}`}
                className="group" // Add the 'group' class here
                startContent={
                  <Avatar
                    isBordered
                    color="primary"
                    radius="lg"
                    src={item.image}
                    className="w-20 h-20"
                  />
                }
                subtitle={<p className="flex-wrap">{item.year}</p>}
                title={
                  <div className="flex flex-1 flex-col">
                    <p>
                      {item.title} | {item.company}
                    </p>
                  </div>
                }
                indicator={
                  <div className="relative">
                    <PlusCircleIcon
                      className="h-6 w-6 text-default-400 group-data-[open=true]:hidden"
                      aria-hidden="true"
                    />
                    <MinusCircleIcon
                      className="h-6 w-6 text-default-400 hidden group-data-[open=true]:block"
                      aria-hidden="true"
                    />
                  </div>
                }
                classNames={{
                  base: `w-full md:w-[90%] mx-auto`,
                  heading: `border-b border-gray-500 ${
                    index === data.experience.length - 1 ? "border-none" : ""
                  }`,
                }}
              >
                {item.desc.map((line, idx) => (
                  <p key={idx} style={{ marginBottom: "10px" }}>
                    {line}
                  </p>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
