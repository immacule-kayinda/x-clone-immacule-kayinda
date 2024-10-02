import { Link } from "react-router-dom";
import { formatPublicationDate } from "../utils/formatPublicationDate";
import { tweetLikeType, tweetUser } from "../utils/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Tweet({
  tweetUser,
  likes,
  setLikes,
}: {
  likes: tweetLikeType[];
  tweetUser: tweetUser;
  setLikes: React.Dispatch<React.SetStateAction<tweetLikeType[]>>;
}) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { id, content, publishedAt, image, user } = tweetUser;
  const [postLikes] = useState<tweetLikeType[]>(
    likes.filter((like) => {
      return like.tweetId === id;
    })
  );

  console.log(postLikes);

  return (
    <div className="flex gap-4 p-3" id={id}>
      <img
        src={user?.avatarUrl}
        className="w-14 h-14 bg-slate-400 flex items-center justify-center rounded-full"
      />

      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-1">
          <Link to={`/${user?.username}`}>
            <h1 className="font-bold">
              {user?.firstName + " " + user?.lastName}
            </h1>
          </Link>
          <h2 className="text-neutral-500">{`${
            user?.username
          }. ${formatPublicationDate(publishedAt)}`}</h2>
        </div>
        <p className="text-base">{content}</p>

        {image && (
          <img
            src={image}
            className="h-80 w-full rounded-2xl"
            alt="tweet image"
          />
        )}
        <div className="flex gap-3">
          <div className="flex flex-row-reverse items-center justify-center">
            <Icon
              icon={"mdi:heart"}
              onClick={() => {
                setIsLiked(!isLiked);
                setLikes((prevLikes) => {
                  const like = prevLikes.find((like) => !like.isLiked);
                  if (like) {
                    like.isLiked = !like.isLiked;
                    return [...prevLikes, like];
                  }
                  return prevLikes;
                });
              }}
              className={`${
                isLiked ? "text-red-500" : "text-red-50"
              } bg-black text-xl`}
            />
            {postLikes.length}
          </div>
          <Icon icon={"mdi:repeat-variant"} className="text-2xl" />
          <Icon icon={"mdi:comment"} className="text-2xl" />
          <Icon icon={"mdi:more-circle"} className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
