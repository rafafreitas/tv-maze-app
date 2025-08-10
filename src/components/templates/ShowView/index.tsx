import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';

import {
  Accordion,
  Text,
  Skeleton,
  Button,
  HeaderBody,
  FixBounce,
  Wrapper,
} from '@src/components';
import { THEME } from '@src/constants';
import {
  ITvMazeShow,
  ITvMazeEpisode,
  ITvMazeEpisodeBySeason,
} from '@src/types';
import { goBack } from '@src/router/actions';
import { GetEpisodes } from '@src/services';
import { styles } from './style';
import { resizeImage, SCREEN_WIDTH } from '@src/helpers';
import ShowItem from '@src/modules/Home/components/ShowItem';

type TGroup = {
  label: string;
  content?: string;
  loading: boolean;
};

const Group = ({ label, content, loading }: TGroup) => (
  <View style={styles.group}>
    <Text fontSize={16} bold>
      {label}
    </Text>
    <Text fontSize={16}>
      {loading ? <Skeleton width={100} height={18} /> : content}
    </Text>
  </View>
);

type IShowView = {
  show: ITvMazeShow;
  isFavorite: boolean;
  loading: boolean;
  onFavoriteAction: () => void;
  onEpisodesViewAction: (episode: ITvMazeEpisode) => void;
};

export default function ShowView({
  show,
  isFavorite,
  loading,
  onFavoriteAction,
  onEpisodesViewAction,
}: IShowView) {
  const dimensions = resizeImage(300);

  const [episodesList, setEpisodesList] = useState<ITvMazeEpisodeBySeason[]>(
    [],
  );

  const getEpisodesList = useCallback(async (showId: number) => {
    try {
      const { data } = await GetEpisodes({ id: showId });

      const grouped = data.reduce<Record<number, ITvMazeEpisode[]>>(
        (acc, episode) => {
          if (!acc[episode.season]) {
            acc[episode.season] = [];
          }
          acc[episode.season].push(episode);
          return acc;
        },
        {},
      );

      const preparedList: ITvMazeEpisodeBySeason[] = Object.entries(
        grouped,
      ).map(([season, episodes]) => ({
        season: Number(season),
        episodes,
      }));

      setEpisodesList(preparedList);
    } catch (e) {
      // TODO - Create error flow
    }
  }, []);

  useEffect(() => {
    getEpisodesList(show.id);
  }, [getEpisodesList, show]);

  return (
    <Wrapper
      withBackButton
      withDrawerButton
      headerType="PRIMARY"
      backgroundColor={THEME.background}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.container}
      >
        <FixBounce color={THEME.primary} position="top" />

        <HeaderBody
          type="PRIMARY"
          title={loading ? <Skeleton width={180} height={24} /> : show?.name}
        />

        {show?.image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: show?.image.original }}
              alt={show.name}
              style={{ width: dimensions.width, height: dimensions.height }}
            />
          </View>
        )}

        <View style={styles.page}>
          <Group label="Name" content={show?.name} loading={loading} />

          <Group
            label="Genres"
            content={show?.genres.join(' - ')}
            loading={loading}
          />

          <Group
            label="Premiered"
            content={show?.premiered}
            loading={loading}
          />
          <Group label="Ended" content={show?.ended} loading={loading} />

          <Group
            label="Schedule Time"
            content={show?.schedule.time}
            loading={loading}
          />
          <Group
            label="Schedule Days"
            content={show?.schedule.days.join(' - ')}
            loading={loading}
          />

          <View style={styles.group}>
            <Text fontSize={16} bold>
              Summary
            </Text>
            <RenderHtml
              contentWidth={SCREEN_WIDTH}
              source={{ html: show.summary }}
            />
          </View>

          <View style={styles.groupSeason}>
            <Text fontSize={16} bold>
              Seasons
            </Text>
            <Accordion
              sections={episodesList.map(value => ({
                id: value.season.toString(),
                title: `Season ${value.season}`,
                content: (
                  <>
                    {value.episodes.map(episode => (
                      <View key={episode.id}>
                        <ShowItem
                          picture={episode.image.medium}
                          name={episode.name}
                          season={episode.season}
                          number={episode.number}
                          onPress={() => onEpisodesViewAction(episode)}
                        />
                      </View>
                    ))}
                  </>
                ),
              }))}
            />
          </View>

          <Button
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            onPress={onFavoriteAction}
          />

          <Button title="Back" onPress={goBack} type="OUTLINE" />
        </View>
      </ScrollView>
    </Wrapper>
  );
}
