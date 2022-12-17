import { ALL_GENRES, NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogProcess } from '../../types/state';
import { Film } from '../../types/films-types';

const initialState: CatalogProcess = {
  genre: ALL_GENRES,
  filteredFilms: [],
};

export const catalogProcess = createSlice({
  name: NameSpace.Catalog,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    filterFilmsByGenre: (state, action: PayloadAction<Film[]>) => {
      if (state.genre === ALL_GENRES) {
        state.filteredFilms = [...action.payload];
      } else {
        state.filteredFilms = [...action.payload].filter(
          (activeFilm) => (
            activeFilm.genre === state.genre
          )
        );
      }
    },
  },
});

export const {changeGenre, filterFilmsByGenre} = catalogProcess.actions;
