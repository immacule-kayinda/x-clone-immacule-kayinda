import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type propTypes = {icon: IconProp; label: string}


function ActionItem({icon, label }: propTypes) {
  return (
    <button className="flex flex-row gap-5 lg:w-auto lg:justify-start lg:h-auto md:w-12 md:h-12 md:justify-center text-xl items-center rounded-full hover:bg-neutral-500 w-full py-2 px-2">
      <FontAwesomeIcon icon={icon} />
      <span className="hidden lg:block text-sm">{label}</span>
    </button>
  );
}

export default ActionItem;
