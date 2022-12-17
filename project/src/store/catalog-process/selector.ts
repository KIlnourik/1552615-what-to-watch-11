import { Film } from '../../types/films-types';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.Catalog].genre;
export const getFilteredFilms = (state: State): Film[] => state[NameSpace.Catalog].filteredFilms;
