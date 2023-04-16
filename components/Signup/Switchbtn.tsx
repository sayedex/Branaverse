import { useState } from "react";
import { Switch } from "@headlessui/react";

type Props = {
  enabled: boolean;
  handleChange: () => void;
};

export function Switchbtn({ enabled, handleChange }: Props) {
  return (
    <div className="text-lg flex flex-row gap-3 items-center col-span-2">
      Individual
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      Company
    </div>
  );
}
