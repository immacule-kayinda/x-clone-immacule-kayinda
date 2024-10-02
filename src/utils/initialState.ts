import { faker } from "@faker-js/faker";
import { tweetLikeType, tweetsType, userType } from "./types";

const tweetCount = 100;
const userCount = 10;
const likeCount = 400;

export const initialUserState: userType[] = Array(userCount)
  .fill("")
  .map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      id: crypto.randomUUID().toString(),
      firstName,
      lastName,
      username: faker.internet.userName({ firstName, lastName }),
      bio: faker.lorem.sentence({ min: 3, max: 30 }),
      avatarUrl: faker.image.url({ width: 50, height: 50 }),
    };
  });

export const initialState: tweetsType[] = Array(tweetCount)
  .fill("")
  .map(() => {
    const firstName = faker.person.firstName();
    return {
      userId:
        initialUserState[Math.floor(Math.random() * initialUserState.length)]
          .id,
      id: crypto.randomUUID().toString(),
      name: firstName,
      content: faker.lorem.paragraph({ min: 1, max: 15 }),
      publishedAt: faker.date
        .between({
          from: "2010-01-01T00:00:00.000Z",
          to: "2020-01-01T00:00:00.000Z",
        })
        .toString(),
      image:
        Math.random() < 0.2
          ? faker.image.urlPicsumPhotos({
              width: 1200,
              height: 1200,
              blur: 2,
              grayscale: true,
            })
          : undefined,
    };
  });

export const initialLikesState: tweetLikeType[] = Array(likeCount)
  .fill("")
  .map(() => ({
    tweetId: initialState[Math.floor(Math.random() * initialState.length)].id,
    id: crypto.randomUUID().toString(),
    userId:
      initialUserState[Math.floor(Math.random() * initialUserState.length)].id,
    isLiked: Math.random() > 0.3,
  }));
