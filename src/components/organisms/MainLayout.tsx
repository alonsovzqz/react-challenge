import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import Sidebar from "../molecules/Sidebar";
import Header from "../molecules/Header";
import { Footer } from "../molecules/Footer";

import { Links, MainLayoutProps, MenuItem } from "../../types/components";

const menuItems: MenuItem[] = [
  {
    icon: HomeIcon,
    title: "Dashboard",
  },
  {
    icon: UsersIcon,
    title: "Team",
  },
  {
    icon: FolderIcon,
    title: "Projects",
  },
  {
    icon: CalendarIcon,
    title: "Calendar",
  },
];

const footerLinks: Links[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Help Center",
    href: "/help-center",
    icon: QuestionMarkCircleIcon,
  },
];

const MainLayout = ({ children, onSearchChange }: MainLayoutProps) => {
  return (
    <div className="bg-white">
      <Sidebar menuItems={menuItems} />
      <div className="lg:pl-72 flex flex-1 flex-col h-screen">
        <Header onSearchChange={onSearchChange} />
        <main className="py-10 px-3">
          {children}
        </main>
        <Footer className="mt-auto sticky" links={footerLinks} />
      </div>
    </div>
  );
};

export default MainLayout;
