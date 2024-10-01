import { useState } from "react";
import ActionBar from "./components/ActionBar";
import MainSection from "./components/MainSection";
import { faker } from "@faker-js/faker";

export type tweetsType = {
  id: string;
  name: string;
  content: string;
  publishedAt: string;
  username: string;
};

const initialState = Array(100)
  .fill("")
  .map(() => {
    const firstName = faker.person.firstName();
    return {
      id: crypto.randomUUID(),
      name: firstName,
      content: faker.lorem.paragraph({ min: 1, max: 15 }),
      publishedAt: faker.date
        .between({
          from: "2010-01-01T00:00:00.000Z",
          to: "2020-01-01T00:00:00.000Z",
        })
        .toString(),
      username: faker.internet.userName({ firstName }),
    };
  });
export default function App() {
  const [tweets, setTweets] = useState<tweetsType[]>(initialState);
  return (
    <div className="w-full md:w-fit flex-1 flex flex-row bg-black mt-2 m-auto md:gap-5 lg:w-10/12">
      <ActionBar />
      <MainSection setTweets={setTweets} tweets={tweets} />
      <ActionBar />
    </div>
  );
}
