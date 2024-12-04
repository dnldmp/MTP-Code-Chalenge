import ScreenSizer from '@components/atoms/ScreenSizer';
import InputSearch from '@components/atoms/InputSearch';
import ProductsGrid from '@components/molecules/ProductsGrid';

const ProductSearchTemplate = () => {
  return (
    <ScreenSizer>
      <div className='flex flex-col items-center justify-center gap-4 w-full mb-4'>
        <h1 className='text-3xl text-center'>Welcome to product search</h1>
        <InputSearch />
        <ProductsGrid />
      </div>
    </ScreenSizer>
  );
};

export default ProductSearchTemplate;
