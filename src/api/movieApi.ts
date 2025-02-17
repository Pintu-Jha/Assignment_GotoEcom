import axios, { AxiosInstance } from 'axios';
import { MovieResponse } from '../types/movie';

const movieApi: AxiosInstance = axios.create({
  baseURL:process.env.BASE_URL,
  params: {
    api_key: process.env.API_KEY,
  },
});

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
  try {
    const response = await movieApi.get<MovieResponse>('/search/movie', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export class MovieService {
  static async fetchPopularMovies(page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${process.env.BASE_UR}/movie/popular?api_key=${process.env.API_KEY}&page=${page}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async fetchTopRatedMovies(page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${process.env.BASE_UR}/movie/top_rated?api_key=${process.env.API_KEY}&page=${page}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async searchMovies(query: string, page: number = 1): Promise<MovieResponse> {
    try {
      const response = await fetch(
        `${process.env.BASE_UR}/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}