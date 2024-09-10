import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Context } from "@/context/ContextProvider";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(Context);

  const handleToggle = () => {
    if (theme === "dark") {
      toggle("light");
    } else {
      toggle("dark");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-softTextColor cursor-pointer">
          Settings
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-44 bg-gray-700 border-none">
        <div className="grid gap-4">
          <label
            className="relative inline-flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              readOnly // prevent user interaction with input itself
            />
            <div className={`w-11 h-6 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  theme === 'dark' ? 'translate-x-5' : ''
                }`}
              ></div>
            </div>
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeToggle;
