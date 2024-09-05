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
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="dakrtower logo"
              height={40}
              radius="sm"
              src="https://media.licdn.com/dms/image/C510BAQGhXx5HbNWrLQ/company-logo_200_200/0/1519861747403?e=2147483647&v=beta&t=1CEMMSI-BXn6cF0gsDqsHNtNZdNdnE-RXvxa6_-wEZo"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Software Developer</p>
              <p className="text-small text-default-500">DarkTower</p>
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
      </div>
    </section>
  );
}
