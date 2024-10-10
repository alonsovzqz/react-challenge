import { useState } from 'react';
import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import Pagination from './components/molecules/Pagination';
import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/20/solid';
import Sidebar from './components/molecules/Sidebar';

import './App.css'

const menuItems = [
  {
    icon: HomeIcon, title: 'Dashboard',
  },
  {
    icon: UsersIcon, title: 'Team',
  },
  {
    icon: FolderIcon, title: 'Projects',
  },
  {
    icon: CalendarIcon, title: 'Calendar',
  }
];

function App() {
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Sidebar menuItems={menuItems} />
      <Input value={input} onChange={inputHandler} placeholder='Enter your email...' />
      <Button label='Click me!' onClick={() => console.log('Hello')} />
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={handlePageChange} />
    </>
  );
}

export default App
