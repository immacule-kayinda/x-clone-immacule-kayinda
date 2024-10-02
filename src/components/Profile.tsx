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
  return (
    <div className="w-full md:border md:w-7/12 lg:max-w-screen-lg md:border-neutral-500  divide-y divide-neutral-500 ">
      <div className="w-full pb-6">
        <div className="bg-slate-400 h-40"></div>
        <img
          src={user?.avatarUrl}
          alt="user avatar"
          className="w-24 h-24 rounded-full absolute top-28 ml-3 border-2 border-white"
        />
        <div className="px-3">
          <h1 className="mt-16 text-xl font-bold">
            {user?.firstName + " " + user?.lastName}{" "}
          </h1>

          <p className="text-sm font-thin text-neutral-300">{user?.bio} </p>
        </div>
      </div>
      <TweetList likes={likes} setLikes={setLikes} tweets={userSortedTweets} />
    </div>
  );
}
