import { tweetLikeType, tweetUser } from "../utils/types";
import Tweet from "./Tweet";

export default function TweetList({
  tweets,
  likes,
  setLikes,
}: {
  likes: tweetLikeType[];
  tweets: tweetUser[];
  setLikes: React.Dispatch<React.SetStateAction<tweetLikeType[]>>;
}) {
  return (
    <>
      {tweets?.map((tweet, index) => {
        return (
          <div key={index}>
            <Tweet likes={likes} setLikes={setLikes} tweetUser={tweet} />
          </div>
        );
      })}
    </>
  );
}
