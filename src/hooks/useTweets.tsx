import { useOutletContext } from "react-router-dom";
import { contextTweetType } from "../utils/types";
export function useTweets() {
  return useOutletContext<contextTweetType>();
}
