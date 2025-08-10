import React, { useEffect, useState, Fragment } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Text, Wrapper, Input, Skeleton, IconCircleX } from '@src/components';
import { THEME } from '@src/constants';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { getShows } from '@src/store/show/thunks/get';
import ShowItem from '@src/modules/Home/components/ShowItem';
import { ITvMazeShow } from '@src/types';
import { navigate } from '@src/router/actions';
import { SCREENS } from '@src/router/constants';

interface IFilter {
  search: string;
}

interface IRenderItem {
  item: ITvMazeShow;
  index: number;
}

const Header = () => {
  const dispatch = useAppDispatch();

  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>();

  const [filter, setFilter] = React.useState<IFilter>({
    search: '',
  });

  const handlerFilterInput = (value: string) => {
    setFilter(prevState => ({
      ...prevState,
      search: value,
    }));

    if (timerId) {
      clearTimeout(timerId);
    }

    const timer = setTimeout(() => {
      dispatch(getShows({ page: 1, q: value }));
    }, 300);
    setTimerId(timer);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <Input
          label="Search"
          value={filter.search}
          onChange={handlerFilterInput}
        />
        {filter.search && filter.search !== '' ? (
          <TouchableOpacity
            onPress={() => handlerFilterInput('')}
            style={styles.cleanSearchContainer}
          >
            <IconCircleX />
          </TouchableOpacity>
        ) : null}
      </View>

      <View>
        <Text fontSize={14}>Shows</Text>
      </View>
    </View>
  );
};

const Gap = () => <View style={styles.gap} />;

export interface IMockElement {
  id: string;
}

export const createListMock = (limit: number = 4): IMockElement[] =>
  Array.from({ length: limit }, () => ({ id: Math.random().toString(36) }));

export default function Home() {
  const dispatch = useAppDispatch();
  const { shows, loading } = useAppSelector(state => state.show);
  const [requested, setRequested] = useState<boolean>(false);

  useEffect(() => {
    if (shows.length === 0 && !requested) {
      dispatch(getShows({ page: 1 }));
      setRequested(true);
    }
  }, [dispatch, shows, requested]);

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

  const renderEmpty = () => {
    return loading ? (
      <Fragment>
        {createListMock(10).map(item => (
          <Fragment key={item.id}>
            <Skeleton width="100%" height={70} borderRadius={10} />
            <Gap />
          </Fragment>
        ))}
      </Fragment>
    ) : (
      <View>
        <Text fontSize={14}>No items found</Text>
      </View>
    );
  };

  return (
    <Wrapper withDrawerButton backgroundColor={THEME.background}>
      <FlatList
        data={loading ? [] : shows}
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
