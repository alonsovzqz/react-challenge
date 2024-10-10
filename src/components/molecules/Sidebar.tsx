import { ArrowLeftStartOnRectangleIcon, BoltIcon } from "@heroicons/react/20/solid";

type menuItem = {
    icon: React.ComponentType<React.ComponentProps<'svg'>>,
    title: string,
};

interface SidebarProps {
    menuItems: menuItem[];
}

const Sidebar = ({
    menuItems,
}: SidebarProps) => {
  return (
    <div
          className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
        >
          <div
            className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
          >
            <div className="flex h-16 shrink-0 items-center">
              <BoltIcon className="h-8" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7" role="list">
                <li>
                  <ul className="-mx-2" role="list">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                        <a
                          className="text-gray-700 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 hover:bg-gray-50 hover:text-indigo-600"
                          href="#"
                          >
                            <item.icon className="text-gray-400 h-6 w-6 shrink-0" />
                            {item.title}
                          </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    className="-mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    href="#"
                    ><ArrowLeftStartOnRectangleIcon className="text-gray-400 h-6 w-6 shrink-0" /> Log out</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  )
}

export default Sidebar