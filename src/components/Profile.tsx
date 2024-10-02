import { useTweets } from "../hooks/useTweets";
import { useParams } from "react-router-dom";
import TweetList from "./TweetList";
import { getTweetsUser } from "../utils/getTweetUser";

export default function Profile() {
  const { username } = useParams();

  const { tweets, setLikes, likes, users } = useTweets();

  const user = users.find((u) => u.username === username);

  const userSortedTweets = getTweetsUser(tweets, users)
    .filter((tweet) => tweet.user?.id === user?.id)
    .sort((a, b) => {
      return (
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    });
  console.log(userSortedTweets, tweets);
  return (
    <div className="w-full md:border md:w-7/12 lg:max-w-screen-lg md:border-neutral-500 divide-y divide-neutral-500 ">
      <div className="w-full md:border">
        <div className="bg-slate-400 h-10 lg:border-y-0"></div>
      </div>
      <TweetList likes={likes} setLikes={setLikes} tweets={userSortedTweets} />
    </div>
  );
}
