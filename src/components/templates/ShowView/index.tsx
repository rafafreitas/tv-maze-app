import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';

import {
  Text,
  Skeleton,
  Button,
  HeaderBody,
  FixBounce,
  Wrapper,
} from '@src/components';
import { THEME } from '@src/constants';
import { ITvMazeShow } from '@src/types';
import { goBack } from '@src/router/actions';
import { styles } from './style';
import { resizeImage, SCREEN_WIDTH } from '@src/helpers';

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
  onFavoriteAction?: () => void;
};

export default function ShowView({
  show,
  isFavorite,
  loading,
  onFavoriteAction,
}: IShowView) {
  const dimensions = resizeImage(300);

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
