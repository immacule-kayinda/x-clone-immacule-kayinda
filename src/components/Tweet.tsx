type TweetProps = {
    username: string
    name: string
    publishedAt: string
    content: string
}

export default function Tweet({ username, name, publishedAt, content}: TweetProps) {
    console.log(publishedAt)
  return (
    <div className="flex gap-4 p-3">
      <div className="w-14 h-14 bg-slate-400 flex items-center justify-center rounded-full">
        picture
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-neutral-500">{`${username}. 7oct`}</h2>
        </div>
        <p className="text-xl">
          {content}
        </p>
      </div>
    </div>
  );
}
