import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Link,
} from "@nextui-org/react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="darktower logo"
              height={40}
              radius="sm"
              src="https://media.licdn.com/dms/image/C510BAQGhXx5HbNWrLQ/company-logo_200_200/0/1519861747403?e=2147483647&v=beta&t=1CEMMSI-BXn6cF0gsDqsHNtNZdNdnE-RXvxa6_-wEZo"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Software Developer</p>
              <p className="text-small text-default-500">DarkTower February 2024-Present</p>
              <p className="text-small text-default-500">February 2024-Present</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Help enhance in-house website features using React as well as work
              with PostgreSQL databases, and maintaining analytical tools and
              web scrapers in Docker and GitLab.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="getdarktower.com">
              Visit DarkTower's Website.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="UAB logo"
              height={40}
              radius="sm"
              src="https://content.sportslogos.net/logos/35/879/full/1518_uab_blazers-primary-2015.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Teaching Assistant</p>
              <p className="text-small text-default-500">UAB Department of Computer Science</p>
              <p className="text-small text-default-500">August 2023-Present</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Helped teach Algorithms and Data Structures, Computer Organization
              and Assembly Language, and Systems Programming.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="uab.edu">
              Visit UAB's Website.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
