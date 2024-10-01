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
    <div className="flex border-t-neutral-50 border-t-2 md:border-none bg-black fixed w-full bottom-0 justify-center md:flex-col md:gap-3">
      {actionList.map((action) => (
        <ActionItem key={action.label} {...action} />
      ))}
      <button className="hidden md:block bg-blue-400 hover:bg-blue-500 rounded-full">
        Tweet
      </button>
    </div>
  );
}

export default ActionBar;
