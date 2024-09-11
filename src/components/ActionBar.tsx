import {
  faBell,
  faHome,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import ActionItem from "./ActionItem";

function ActionBar() {
  const actionList = [
    { label: "Home", icon: faHome },
    { label: "Profile", icon: faUser },
    { label: "Messages", icon: faMessage },
    { label: "Notifications", icon: faBell },
    { label: "More", icon: faEllipsis}
  ];

  return (
    <div className="flex w-96 sticky top-1 border pt-5 flex-col gap-3">
      {actionList.map((action) => (
        <ActionItem key={action.label} {...action} />
      ))}
      <button className="px-5 py-3 bg-blue-400 hover:bg-blue-500 rounded-full">
        Tweet
      </button>
    </div>
  );
}

export default ActionBar;
