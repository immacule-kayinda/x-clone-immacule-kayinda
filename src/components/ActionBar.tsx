import {
  faBell,
  faHome,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import ActionItem from "./ActionItem";
import { useState } from "react";

function ActionBar() {
  // const [focus, setFocus] = useState<boolean>(false);
  const actionList = [
    { label: "Home", icon: faHome },
    { label: "Profile", icon: faUser },
    { label: "Messages", icon: faMessage },
    { label: "Notifications", icon: faBell },
    { label: "More", icon: faEllipsis },
  ];

  return (
    <div className="flex border-t-neutral-50 lg:w-48 md:w-fit md:border-none lg:max-w-prose sticky  w-full bottom-0 justify-center md:justify-start md:flex-col md:gap-3 lg:top-0 lg:h-full">
      <div className="bg-black py-3 md:rounded-lg md:py-10 lg:gap-y-4 md:w-fit lg:w-full md:px-5 w-full md:gap-y-3 flex md:justify-start justify-evenly md:flex-col lg:sticky lg:top-0">
        {actionList.map((action) => (
          <ActionItem key={action.label} {...action} />
        ))}
        <button className="hidden md:block bg-blue-400 lg:w-auto md:w-12 md:h-12 hover:bg-blue-500 rounded-full">
          Tweet
        </button>
      </div>
    </div>
  );
}

export default ActionBar;
