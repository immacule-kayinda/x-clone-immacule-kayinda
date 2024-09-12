import Tweet from "./Tweet";
import { faker } from '@faker-js/faker';

export default function TweetList() {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => {
        const firstName = faker.name.firstName();
          const tweetData = {
            name: firstName,
            content: faker.lorem.paragraph({min: 1, max: 15}),
            publishedAt: faker.date.between({from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z'}).toString(),
            username: faker.internet.userName({firstName}),
          }
            return (
            <div key={index}>
              <Tweet {...tweetData} />
            </div>
          );
        })}
    </>
  );
}
