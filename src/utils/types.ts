export type tweetsType = {
  id: string;
  content: string;
  publishedAt: string;
  userId: string;
  image?: string;
  // comments: tweetsType[];
};

export type tweetLikeType = {
  id: string;
  tweetId: string;
  userId: string;
  isLiked: boolean;
};

export type userType = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  avatarUrl?: string;
};

export type contextTweetType = {
  users: userType[];
  tweets: tweetsType[];
  likes: tweetLikeType[];
  setTweets: React.Dispatch<React.SetStateAction<tweetsType[]>>;
  setLikes: React.Dispatch<React.SetStateAction<tweetLikeType[]>>;
};

export type tweetUser = {
  id: string;
  content: string;
  publishedAt: string;
  image?: string;
  user?: userType;
};
