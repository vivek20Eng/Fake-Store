// fakeStore.ts

import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(`${baseURL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
}

export async function getProductById(productId: number): Promise<Product> {
  try {
    const response = await axios.get<Product>(`${baseURL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
}

export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(`${baseURL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function getProductsByLimit(limit: number): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(`${baseURL}/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${limit} products:`, error);
    throw error;
  }
}
