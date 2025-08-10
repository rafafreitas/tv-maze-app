import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { IconChevronRight, Text } from '@src/components';
import { styles } from './style';

interface IShowItemProps {
  picture: string;
  name: string;
  premiered?: string;
  ended?: string;
  season?: number;
  number?: number;
  onPress: () => void;
}

const ShowItem = ({
  picture,
  name,
  premiered,
  ended,
  season,
  number,
  onPress,
}: IShowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.group}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: picture }} alt={name} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text fontSize={15} numberOfLines={1}>
            {name}
          </Text>
          <View>
            {premiered && (
              <Text bold fontSize={12}>
                Premiered: <Text fontSize={12}>{premiered}</Text>
              </Text>
            )}

            {ended && (
              <Text bold fontSize={12}>
                Ended: <Text fontSize={12}>{ended}</Text>
              </Text>
            )}

            {season && (
              <Text bold fontSize={12}>
                Season: <Text fontSize={12}>{season}</Text>
              </Text>
            )}

            {number && (
              <Text bold fontSize={12}>
                Number: <Text fontSize={12}>{number}</Text>
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.action}>
        <IconChevronRight size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default ShowItem;
