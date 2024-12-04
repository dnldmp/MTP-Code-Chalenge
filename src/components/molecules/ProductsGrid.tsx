'use client';

import { useProductContext } from '@/src/context/ProductContext';
import { ProductItem } from '@components/atoms/ProductItem';
import { ProductPaginator } from '@components/atoms/ProductPaginator';
import { ProductSkeleton } from '@components/atoms/ProductSkeleton';

export default function ProductsGrid() {
  const { products, search } = useProductContext();

  return (
    <main className='flex flex-col items-center w-full justify-between'>
      <div className='w-full items-center justify-between text-sm'>
        <div className='flex flex-row flex-wrap gap-4 justify-center w-full'>
          {products.length === 0 && !search ? (
            Array.from({ length: 21 }).map((_, index) => <ProductSkeleton key={index} />)
          ) : products.length === 0 && search ? (
            <div className='flex w-full justify-center items-center'>
              <h1 className='text-xl'>No products found</h1>
            </div>
          ) : (
            products.map((product) => <ProductItem key={product.id} product={product} />)
          )}
        </div>
      </div>

      {products.length > 0 && <ProductPaginator />}
    </main>
  );
}
