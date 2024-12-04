import ProductsGrid from '@components/molecules/ProductsGrid';
import ScreenSizer from '@components/atoms/ScreenSizer';

export default function Products() {
  return (
    <ScreenSizer>
      <ProductsGrid />
    </ScreenSizer>
  );
}
