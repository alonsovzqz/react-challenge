import React, { useEffect, useState } from "react";

import Pagination from "./components/molecules/Pagination";
import MainLayout from "./components/organisms/MainLayout";

import { useUserData } from "./hooks/useUserData";
import { User } from "./types/user";
import CollapsibleCard from "./components/organisms/CollapsibleCard";
import { Select } from "./components/atoms/Select";
import { Option } from "./types/components";

const RESULTS_PER_PAGE = 10;
const sortOptions: Option[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

function App() {
  const { data: users, isLoading, isError } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (users) {
      const sortedAndFilteredUsers = [...users]
      .filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.firstName.localeCompare(b.firstName);
        } else {
          return b.firstName.localeCompare(a.firstName);
        }
      });
      setFilteredUsers(sortedAndFilteredUsers);
    }
  }, [users, sortOrder,searchTerm]);

  const handleDeleteUser = (userId: number) => {
    const updatedUsers = filteredUsers.filter((user) => user.id !== userId);
    setFilteredUsers(updatedUsers);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const totalPages = Math.ceil(filteredUsers?.length / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const paginatedUsers: User[] = filteredUsers?.slice(
    startIndex,
    startIndex + RESULTS_PER_PAGE
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error loading data.
      </div>
    );
  }

  return (
    <MainLayout onSearchChange={handleSearchChange}>
      <div className="flex justify-end mb-5 px-4 lg:px-8 sm:px-6">
        <Select
          label="Sort"
          options={sortOptions}
          value={sortOrder}
          onChange={handleSortChange}
        />
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {paginatedUsers.map((user) => (
          <CollapsibleCard
            key={user.id}
            user={user}
            handleDeleteUser={() => handleDeleteUser(user.id)}
          />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={filteredUsers?.length}
        onPageChange={handlePageChange}
      />
    </MainLayout>
  );
}

export default App;
