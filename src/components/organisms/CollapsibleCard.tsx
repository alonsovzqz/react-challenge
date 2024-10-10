import { useState } from "react";

import { CollapsibleCardProps } from "../../types/components";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Button } from "../atoms/Button";
import {
  BoltIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  PhoneArrowDownLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const CollapsibleCard = ({ user }: CollapsibleCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const userFullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <li
        className="flex justify-between gap-x-6 py-5 px-4 lg:px-8 sm:px-6 hover:cursor-pointer hover:bg-gray-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex min-w-0 gap-x-4">
          <img
            alt={userFullName}
            src={user.image}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {userFullName}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {user.email}
            </p>
          </div>
        </div>
        <div className="items-center shrink-0 flex gap-x-4">
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900 capitalize">
              {user.role}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              {user.address.city}, {user.address.state}
            </p>
          </div>
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5 flex-none text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 flex-none text-gray-500" />
          )}
        </div>
      </li>
      {!isCollapsed && (
        <div className="flex py-5 px-4 lg:px-8 sm:px-6 min-w-full">
          <dl className="grid sm:grid-cols-2 grid-cols-1 min-w-full">
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <UserCircleIcon className="w-5 h-5 text-gray-900" />
                <span className="ml-1">Full name</span>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {userFullName}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <BuildingOffice2Icon className="w-5 h-5 text-gray-900" />
                <span className="ml-1">Company name</span>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {user.company.name}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <CalendarIcon className="w-5 h-5 text-gray-900" />
                <span className="ml-1">Birthdate</span>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {user.birthDate}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <PhoneArrowDownLeftIcon className="w-5 h-5 text-gray-900" />
                <span className="ml-1">Phone</span>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {user.phone}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <BoltIcon className="w-5 h-5 text-gray-900" />
                <span className="ml-1">Actions</span>
              </dt>
              <dd className="flex justify-end mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                <Button variant="danger">
                    <TrashIcon className="w-5 h-5" />
                    <span className="ml-1">Delete</span>
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      )}
    </>
  );
};

export default CollapsibleCard;
