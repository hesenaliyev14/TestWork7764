import { create } from 'zustand';
import { Product, ProductsResponse } from '@/types';
import { productsAPI } from '@/services/api';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  total: number;
}

interface ProductsStore extends ProductsState {
  fetchProducts: (limit?: number, skip?: number) => Promise<void>;
  clearError: () => void;
}

export const useProductsStore = create<ProductsStore>(set => ({
  products: [],
  isLoading: false,
  error: null,
  total: 0,

  fetchProducts: async (limit = 12, skip = 0) => {
    set({ isLoading: true, error: null });

    try {
      const response: ProductsResponse = await productsAPI.getProducts(
        limit,
        skip
      );
      set({
        products: response.products,
        total: response.total,
        isLoading: false,
        error: null,
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch products';
      set({
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));
