import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '@/types';
import { authAPI } from '@/services/api';

interface AuthStore extends AuthState {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
  message?: string;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          const userData = await authAPI.login({ username, password });
          set({
            user: userData,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          });
        } catch (error: unknown) {
          let errorMessage = 'Login failed';
          
          const apiError = error as ApiError;
          
          if (apiError.response?.data?.message) {
            errorMessage = apiError.response.data.message;
          } else if (apiError.message) {
            errorMessage = apiError.message;
          } else if (apiError.response?.status === 400) {
            errorMessage = 'Invalid credentials';
          } else if (apiError.response?.status === 404) {
            errorMessage = 'User not found';
          } else if (apiError.response?.status && apiError.response.status >= 500) {
            errorMessage = 'Server error. Please try again later.';
          }
          
          set({
            isLoading: false,
            error: errorMessage,
            isAuthenticated: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          isLoading: false,
          error: null,
          isAuthenticated: false,
        });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
