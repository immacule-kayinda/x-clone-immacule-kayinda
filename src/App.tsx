import { useState } from "react";
import ActionBar from "./components/ActionBar";
import { Outlet } from "react-router-dom";
import { contextTweetType, tweetLikeType, tweetsType, userType } from "./utils/types";
import { initialLikesState, initialState, initialUserState } from "./utils/initialState";


export default function App() {
  const [tweets, setTweets] = useState<tweetsType[]>(initialState);
  const [users] = useState<userType[]>(initialUserState);
  const [likes, setLikes] = useState<tweetLikeType[]>(initialLikesState)
  return (
    <div className="w-full md:w-fit flex-1 flex flex-row bg-black mt-2 m-auto md:gap-5 lg:w-10/12">
      <ActionBar />
      <Outlet
        context={{ users, tweets, setTweets,likes, setLikes } satisfies contextTweetType}
      />
      <ActionBar />
    </div>
  );
}
