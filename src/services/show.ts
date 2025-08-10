import { Http } from './http';
import { ITvMazeShow, ITvMazeEpisode } from '@src/types';

type TListShow = ITvMazeShow[];

type TListEpisodes = ITvMazeEpisode[];

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

interface IGetEpisodes {
  id: number;
}

export const GetShows = ({ page }: IGetShow) =>
  Http().get<TListShow>(`/shows`, { params: { page } });

export const GetShowsByName = ({ page, q }: IGetShowByName) =>
  Http().get<TListShowByName>(`/search/shows`, { params: { page, q } });

export const GetShowById = ({ id }: IGetShowById) =>
  Http().get<ITvMazeShow>(`/shows/${id}`);

export const GetEpisodes = ({ id }: IGetEpisodes) =>
  Http().get<TListEpisodes>(`/shows/${id}/episodes`);
