import { Icon } from '@iconify/react';

type propTypes = {icon: string ; label: string}


function ActionItem({icon, label }: propTypes) {
  return (
    <button className="flex flex-row gap-5 lg:w-auto  lg:justify-start lg:h-auto md:w-12 md:h-12 md:justify-center text-xl items-center rounded-full hover:bg-slate-600  py-2 px-2 lg:pl-4">
      <Icon icon={icon} />
      <span className="hidden lg:block text-sm">{label}</span>
    </button>
  );
}

export default ActionItem;
