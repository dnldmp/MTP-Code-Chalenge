import { useProductContext } from '@/src/context/ProductContext';

export const ProductPaginator = () => {
  const { prevPage, currentPage, totalPages, nextPage } = useProductContext();

  return (
    <div className='flex justify-around w-full border-t-2 pt-4 mt-4'>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
