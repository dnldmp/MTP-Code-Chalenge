export const ProductSkeleton = () => (
  <div className='w-full max-w-64 rounded-lg border shadow-md border-gray-200 px-5 py-4'>
    <div className='animate-pulse'>
      <div className='bg-gray-300 h-6 mb-3 w-3/4'></div>
      <div className='bg-gray-300 h-4 mb-3'></div>
      <div className='bg-gray-300 h-4 mb-3 w-1/2'></div>
      <div className='bg-gray-300 h-8 mb-3 w-3/4'></div>
      <div className='bg-gray-300 h-4 mb-3'></div>
      <div className='bg-gray-300 h-4 mb-3 w-1/3'></div>
    </div>
  </div>
);
