import { tweetsType, tweetUser, userType } from "./types";

export const getTweetsUser = (
  tweets: tweetsType[],
  users: userType[]
): tweetUser[] => {
  return tweets.map((tweet: tweetsType) => {
    const user = users.find((u) => u.id === tweet.userId);
    const { content, id, publishedAt, image } = tweet;
    return {
      user,
      content,
      id,
      image,
      publishedAt,
    };
  });
};
