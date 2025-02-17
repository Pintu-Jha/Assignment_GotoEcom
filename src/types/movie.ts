export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  video: boolean;
  genre_ids: number[];
  original_language: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface MovieDetails extends Omit<Movie, 'genre_ids'> {
  genres: Genre[];
  tagline?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  production_companies?: ProductionCompany[];
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export type MovieList = {
  name: string;
  movies: Movie[];
  totalCount: number;
};

export interface MovieFilters {
  sortBy?: 'popularity' | 'vote_average' | 'release_date';
  sortOrder?: 'asc' | 'desc';
  genreIds?: number[];
  year?: number;
  minRating?: number;
}