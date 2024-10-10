import { useState } from 'react';

import Pagination from './components/molecules/Pagination';
import MainLayout from './components/organisms/MainLayout';

import { useUserData } from './hooks/useUserData';
import { User } from './types/user';
import CollapsibleCard from './components/organisms/CollapsibleCard';

const RESULTS_PER_PAGE = 10;

function App() {
  const { data: users, isLoading, isError } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(users?.length / RESULTS_PER_PAGE);
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const paginatedUsers: User[] = users?.slice(startIndex, startIndex + RESULTS_PER_PAGE) || [];

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
      <ul role='list' className='divide-y divide-gray-100'>
        {paginatedUsers.map((user) => (
          <CollapsibleCard key={user.id} user={user} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={users?.length}
        onPageChange={handlePageChange}
      />
    </MainLayout>
  );
}

export default App
