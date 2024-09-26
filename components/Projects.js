import React from "react";
import userData from "@constants/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Projects() {
  return (
    <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-10 flex-col !items-start">
          <p className="text-2xl text-white/60 uppercase font-bold">
            My Projects
          </p>
          <h4 className="text-white font-medium text-xl">
            Enjoy! I hope you like them.
          </h4>
        </CardHeader>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {userData.projects[1].title}
          </p>
          <h4 className="text-white font-medium text-large">
            {userData.projects[1].description}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={userData.projects[1].imgUrl}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Monitor</p>
              <p className="text-tiny text-white/60">Grow</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            onClick={() => window.open(userData.projects[1].link, "_blank")}
          >
            See the Code
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {userData.projects[2].title}
          </p>
          <h4 className="text-white font-medium text-large">
            {userData.projects[2].description}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={userData.projects[2].imgUrl}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Have a Question?</p>
              <p className="text-tiny text-white/60">Seek an Answer</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            onClick={() => window.open(userData.projects[2].link, "_blank")}
          >
            See the App
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {userData.projects[3].title}
          </p>
          <h4 className="text-black font-medium text-2xl">
            {userData.projects[3].description}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={userData.projects[3].imgUrl}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Store It</p>
              <p className="text-tiny text-white/60">Find It</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            onClick={() => window.open(userData.projects[3].link, "_blank")}
          >
            See the App
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {userData.projects[0].title}
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            {userData.projects[0].description}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={userData.projects[0].imgUrl}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            {/* <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            /> */}
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Plan Together</p>
              <p className="text-tiny text-white/60">Travel Together</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            onClick={() => window.open(userData.projects[0].link, "_blank")}
          >
            See the Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

//   return (
//     <section className="bg-gray-800">
//       <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-10 text-center lg:text-left">
//         Projects
//       </h1>
//       <div className="max-w-6xl mx-auto grid grid-cols-1">
//         {userData.projects.map((project, idx) => (
//           <div key={idx}>
//             <a href={project.link} target="_blank" rel="noreferrer">
//               <img
//                 src={project.imgUrl}
//                 alt={project.title}
//                 className="rounded-lg shadow-lg w-full h-[500px] object-cover "
//               />
//             </a>
//             <h1 className="text-2xl font-bold text-white text-center my-5">
//               {project.title}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
