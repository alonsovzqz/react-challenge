import { useState } from 'react';

import Pagination from './components/molecules/Pagination';
import MainLayout from './components/organisms/MainLayout';

import { useUserData } from './hooks/useUserData';
import { User } from './types/user';

const USER_PER_PAGE = 10;

function App() {
  const { data: users, isLoading, isError } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * USER_PER_PAGE;
  const paginatedUsers: User[] = users?.slice(startIndex, startIndex + USER_PER_PAGE) || [];

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center h-screen'>Error loading data.</div>
    );
  }

  return (
    <MainLayout>
      {paginatedUsers.map((user) => (
        <div key={user.id}>
          {`${user.firstName} ${user.lastName}`}
          {user.email}
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={users?.length || 0}
        onPageChange={handlePageChange}
      />
    </MainLayout>
  );
}

export default App
