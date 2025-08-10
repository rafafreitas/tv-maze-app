import { Http } from './http';
import { ITvMazeShow } from '@src/types';

type TListShow = ITvMazeShow[];

type TShowByName = {
  score: number;
  show: ITvMazeShow;
};

type TListShowByName = TShowByName[];

interface IGetShow {
  page: number;
}

interface IGetShowByName {
  page: number;
  q?: string;
}

interface IGetShowById {
  id: number;
}

export const GetShows = ({ page }: IGetShow) =>
  Http().get<TListShow>(`/shows`, { params: { page } });

export const GetShowsByName = ({ page, q }: IGetShowByName) =>
  Http().get<TListShowByName>(`/search/shows`, { params: { page, q } });

export const GetShowById = ({ id }: IGetShowById) =>
  Http().get<ITvMazeShow>(`/shows/${id}`);
