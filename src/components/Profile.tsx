import React from "react";
import { tweetsType } from "../App";
import { useParams } from "react-router-dom";
import TweetList from "./TweetList";

export default function Profile({ tweets }: { tweets: tweetsType[] }) {
  const { username } = useParams();
  const userSortedTweets = tweets
    .filter((tweet) => tweet.username === username)
    .sort((a, b) => {
      return (
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      );
    });
  return (
    <div>
      <h1>Profile de {username}</h1>
      <TweetList tweets={userSortedTweets} />
    </div>
  );
}
