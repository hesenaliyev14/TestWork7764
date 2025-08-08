import axios from 'axios';
import { LoginRequest, LoginResponse, ProductsResponse } from '@/types';

const API_BASE_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', credentials);
    const data = response.data;
    
    return {
      id: data.id,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      image: data.image,
      token: data.accessToken,
    };
  },
};

export const productsAPI = {
  getProducts: async (
    limit: number = 12,
    skip: number = 0
  ): Promise<ProductsResponse> => {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;
  },
};

export default api;
