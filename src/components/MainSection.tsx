import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

export default function MainSection() {
  return (
    <div className="w-full border-t-0 md:border border-y-neutral-500 divide-y divide-neutral-500 ">
      <header className="flex justify-between  text-xl p-5">
        <h1 className="font-black">Home</h1>
        <button>Compose</button>
      </header>

      <TweetForm />
      <TweetList />
    </div>
  );
}
