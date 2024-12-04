'use client';

import { useEffect, useState } from 'react';

import { IoMdSearch } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { useProductContext } from '@/src/context/ProductContext';

const InputSearch = () => {
  const { searchProducts } = useProductContext();
  const [search, setSearch] = useState('');

  const resetSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    searchProducts(search);
  }, [search]);

  return (
    <div className='flex flex-row max-w-2xl w-full p-4 rounded-full border border-gray-300 justify-between items-center hover:shadow-md focus:shadow-md gap-2'>
      <IoMdSearch className='text-2xl text-gray-400' />
      <div className='w-full flex flex-row items-center justify-between'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex w-11/12 focus:outline-none'
          type='text'
          placeholder='What product would you like to search?'
        />
        {search && <IoMdClose onClick={resetSearch} className='flex w-10  px-2 text-xl cursor-pointer text-gray-500' />}
      </div>

      {/*<IoFilterSharp className='text-xl text-gray-500 cursor-pointer' />*/}
    </div>
  );
};

export default InputSearch;
