import { tweetsType } from "../App";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

export default function MainSection({
  tweets,
  setTweets,
}: {
  setTweets: React.Dispatch<React.SetStateAction<tweetsType[]>>;
  tweets: tweetsType[];
}) {
  return (
    <div className="w-full border-t-0 md:border lg:w-10/12 lg:max-w-screen-md border-y-neutral-500 divide-y divide-neutral-500 ">
      <header className="flex justify-between  text-xl p-5">
        <h1 className="font-black">Home</h1>
        <button>Compose</button>
      </header>

      <TweetForm tweets={tweets} setTweets={setTweets} />
      <TweetList tweets={tweets} />
    </div>
  );
}
