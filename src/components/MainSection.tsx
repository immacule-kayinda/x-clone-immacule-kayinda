import { useTweets } from "../hooks/useTweets";
import { getTweetsUser } from "../utils/getTweetUser";
import { tweetUser } from "../utils/types";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

export default function MainSection() {
  const { setTweets, setLikes, tweets, likes, users } = useTweets();

  const tweetsList: tweetUser[] = getTweetsUser(tweets, users);

  return (
    <div className="w-full md:border lg:w-7/12 lg:m-auto lg:max-w-screen-md  md:border-neutral-500 divide-y divide-neutral-500 ">
      <header className="flex justify-between text-xl p-5">
        <h1 className="font-black">Home</h1>
        <button>Compose</button>
      </header>

      <TweetForm setTweets={setTweets} />
      <TweetList setLikes={setLikes} likes={likes} tweets={tweetsList} />
    </div>
  );
}
