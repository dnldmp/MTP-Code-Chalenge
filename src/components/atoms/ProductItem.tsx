import { Product } from '@type/products';
import Link from 'next/link';
import ReactStars from 'react-stars';

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div
      key={product.id}
      className='w-full max-w-64 rounded-lg border shadow-md border-gray-200 px-5 py-4 hover:dark:bg-gray-100 text-sm'
    >
      <Link href={`/products/${product.id}`}>
        <h3 className='mb-3 text-xl font-semibold'>{product.name}</h3>
        <div className='opacity-80 flex flex-col gap-2'>
          <div className='flex flex-row gap-2 w-full justify-center'>
            <ReactStars count={5} value={product.rating} size={20} color2='#ffd700' half={true} edit={false} />
            <p>of {product.numReviews} reviews</p>
          </div>
          <div className='bg-blue-600 rounded text-white text-bold p-1 justify-center'>
            <p className='text-center'>{product.category}</p>
          </div>

          <p className='font-bold'>${product.price}</p>
          <p>{product.description}</p>

          <p className='text-xs text-gray-700'>{product.countInStock} Available</p>
        </div>
      </Link>
    </div>
  );
};
