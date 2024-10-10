import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button
        variant="phantom"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        type="button"
      >
        <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-rect">
          Open sidebar
        </span>
        <Bars3Icon className="h-6 w-6" />
      </Button>
      <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden"></div>
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form action="#" className="relative flex flex-1" method="GET">
          <label
            className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-rect"
            htmlFor="search-field"
          >
            Search
          </label>
          <MagnifyingGlassIcon className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" />
          <Input
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 bol sm:text-sm"
            id="search-field"
            name="search"
            placeholder="Search..."
            type="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button
            variant="phantom"
            className="-m-2.5 p-2.5 text-gray-400"
            type="button"
          >
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-rect">
              View notifications
            </span>
            <BellIcon className="h-6 w-6" />
          </Button>
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          ></div>
          <div className="relative" data-headlessui-state="">
            <Button
              className="-m-1.5 flex items-center p-1.5"
              variant="phantom"
              type="button"
            >
              <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-rect">
                Open user menu
              </span>
              <img
                alt=""
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                >
                  Jhon Doe
                </span>
                <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
