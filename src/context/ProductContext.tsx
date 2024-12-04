'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import largeData from '@/src/mock/large/products.json';
import smallData from '@/src/mock/small/products.json';
import { Product } from '@type/products';

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: Product[];
  nextPage: () => void;
  prevPage: () => void;
  totalPages: number;
  currentPage: number;
  searchProducts: (search: string) => void;
  search: string;
}

const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const PAGE_SIZE = 21;
  const productsData: Product[] = [...largeData, ...smallData];

  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  let totalPages = Math.ceil(productsData.length / PAGE_SIZE);

  if (search) {
    totalPages = Math.ceil(filterProducts.length / PAGE_SIZE);
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    window.scrollTo(0, 0);

    if (search) {
      return setProducts(filterProducts.slice(startIndex, endIndex));
    }
    setProducts(productsData.slice(startIndex, endIndex));
  }, [currentPage, filterProducts]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const searchProducts = (text: string) => {
    if (text) {
      const filter = productsData.filter(
        (product) =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.category.toLowerCase().includes(text.toLowerCase()) ||
          product.description.toLowerCase().includes(text.toLowerCase())
      );

      setFilterProducts(filter);
    }

    if (!text) {
      setFilterProducts([]);
    }

    setSearch(text);
    setCurrentPage(1);
  };

  return (
    <ProductContext.Provider value={{ products, nextPage, prevPage, currentPage, totalPages, searchProducts, search }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
