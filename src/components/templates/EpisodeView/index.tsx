import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Text, Button, HeaderBody, FixBounce, Wrapper } from '@src/components';
import { THEME } from '@src/constants';
import { ITvMazeEpisode } from '@src/types';
import { goBack } from '@src/router/actions';
import { styles } from '../ShowView/style';
import { resizeImage, SCREEN_WIDTH } from '@src/helpers';

type TGroup = {
  label: string;
  content?: string;
};

const Group = ({ label, content }: TGroup) => (
  <View style={styles.group}>
    <Text fontSize={16} bold>
      {label}
    </Text>
    <Text fontSize={16}>{content}</Text>
  </View>
);

type IShowView = {
  episode: ITvMazeEpisode;
};

export default function EpisodeView({ episode }: IShowView) {
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

        <HeaderBody type="PRIMARY" title={episode?.name} />

        {episode?.image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: episode?.image.original }}
              alt={episode.name}
              style={{ width: dimensions.width, height: dimensions.height }}
            />
          </View>
        )}

        <View style={styles.page}>
          <Group label="Name" content={episode?.name} />
          <Group label="Number" content={episode.number.toString()} />
          <Group label="Season" content={episode.season.toString()} />

          <View style={styles.group}>
            <Text fontSize={16} bold>
              Summary
            </Text>
            <RenderHtml
              contentWidth={SCREEN_WIDTH}
              source={{ html: episode.summary }}
            />
          </View>

          <Button title="Back" onPress={goBack} type="OUTLINE" />
        </View>
      </ScrollView>
    </Wrapper>
  );
}
