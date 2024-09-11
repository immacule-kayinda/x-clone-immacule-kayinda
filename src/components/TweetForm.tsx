function TweetForm() {
  return (
    <div className="p-4 h-50">
      <div className="flex gap-2">
        <div className="bg-neutral-500 w-16 h-16 text-center justify-center items-center rounded-full">
          picture
        </div>

        <div className="w-full">
          <textarea
            placeholder="Whats Happening"
            className="bg-transparent outline-nonde w-full grow h-24 flex justify-start items-start"
          ></textarea>
          <div className="w-full flex flex-row justify-between">
            <div className="flex gap-2">Logogroup</div>
            <button
              onClick={() =>
                alert("Pressé ya nini ? On a pas encore cette fonctionnalité")
              }
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetForm;
