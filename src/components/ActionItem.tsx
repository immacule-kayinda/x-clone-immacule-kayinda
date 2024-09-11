import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type propTypes = {icon: IconProp; label: string}


function ActionItem({icon, label }: propTypes) {
  return (
    <button className="flex flex-row text-xl items-center rounded-full hover:bg-neutral-500 p-4">
      <FontAwesomeIcon icon={icon} className="mr-6" />
      {label}
    </button>
  );
}

export default ActionItem;
