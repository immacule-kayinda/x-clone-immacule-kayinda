import ActionItem from "./ActionItem";
import SearchBar from "./SearchBar";

function ActionBar() {
  // const [focus, setFocus] = useState<boolean>(false);
  const actionList = [
    { label: "Home", icon: "bi:house-door-fill" },
    { label: "Profile", icon: "bi:person" },
    { label: "Messages", icon: "ph:messenger-logo" },
    { label: "Notifications", icon: "bi:bell" },
    { label: "More", icon: "ph:dots-three-circle-vertical" },
  ];

  return (
    <div className="flex border-t-neutral-500 border-t lg:w-72 md:w-fit md:border-none lg:max-w-prose fixed  w-full bottom-0 justify-center md:justify-start md:flex-col md:gap-3 md:relative">
      <div className="w-full lg:sticky top-2">
        <SearchBar />
        <div className="bg-black lg:bg-slate-700 md:rounded-xl md:py-5 py-3 lg:gap-y-2 md:w-fit lg:w-full md:px-5 w-full md:gap-y-3 flex md:justify-start justify-evenly md:flex-col ">
          {actionList.map((action) => (
            <ActionItem key={action.label} {...action} />
          ))}
          <button className="hidden md:block bg-blue-400 lg:w-auto md:w-12 md:h-12 hover:bg-blue-500  rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
