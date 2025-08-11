import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './style';
import { Text, Wrapper } from '@src/components';
import { THEME } from '@src/constants';
import { useAppSelector } from '@src/store/hooks';
import ShowItem from '@src/modules/Home/components/ShowItem';
import { ITvMazeShow } from '@src/types';
import { navigate } from '@src/router/actions';
import { SCREENS } from '@src/router/constants';

interface IRenderItem {
  item: ITvMazeShow;
  index: number;
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text fontSize={14}>My Favorites</Text>
      </View>
    </View>
  );
};

const Gap = () => <View style={styles.gap} />;

export default function Home() {
  const { favorites } = useAppSelector(state => state.favorites);

  const renderItem = ({ item }: IRenderItem) => {
    return (
      <ShowItem
        name={item.name}
        picture={item.image?.medium}
        premiered={item?.premiered || '-'}
        ended={item?.ended || '-'}
        onPress={() => navigate(SCREENS.PRIVATE.HOME.ITEM_VIEW, { show: item })}
      />
    );
  };

  const renderEmpty = () => (
    <View>
      <Text fontSize={14}>No favorites registered</Text>
    </View>
  );

  return (
    <Wrapper withDrawerButton backgroundColor={THEME.background}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        ListHeaderComponent={Header}
        keyExtractor={item => `${item?.id}-${String(Math.random())}`}
        style={styles.flatList}
        contentContainerStyle={styles.scrollViewPage}
        ItemSeparatorComponent={Gap}
        ListEmptyComponent={renderEmpty}
      />
    </Wrapper>
  );
}
