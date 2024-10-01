import { tweetsType } from "../App";
import Tweet from "./Tweet";

export default function TweetList({ tweets }: { tweets: tweetsType[] }) {
  return (
    <>
      {tweets.map((tweet, index) => {
        return (
          <div key={index}>
            <Tweet {...tweet} />
          </div>
        );
      })}
    </>
  );
}
