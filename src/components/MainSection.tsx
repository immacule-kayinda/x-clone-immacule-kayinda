import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

export default function MainSection() {
  return (
    <div className="w-11/12 border-t-0 border border-y-neutral-500 divide-y divide-neutral-500 ">
      <header className="flex justify-between  text-xl p-5">
        <h1 className="font-black">Home</h1>
        <button>Compose</button>
      </header>

      <TweetForm />
      <TweetList />

      <div>Another one</div>
      <div>Another one</div>
      <div>Another one</div>
    </div>
  );
}
