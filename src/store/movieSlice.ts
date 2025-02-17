import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';

interface MovieState {
  shortlistedMovies: Movie[];
}

const initialState: MovieState = {
  shortlistedMovies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToShortlist: (state, action: PayloadAction<Movie>) => {
      state.shortlistedMovies.push(action.payload);
    },
    removeFromShortlist: (state, action: PayloadAction<number>) => {
      state.shortlistedMovies = state.shortlistedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToShortlist, removeFromShortlist } = movieSlice.actions;
export default movieSlice.reducer;