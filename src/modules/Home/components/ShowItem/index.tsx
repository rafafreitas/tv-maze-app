import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { IconChevronRight, Text } from '@src/components';
import { styles } from './style';

interface IShowItemProps {
  picture: string;
  name: string;
  premiered: string;
  ended: string;
  onPress: () => void;
}

const ShowItem = ({
  picture,
  name,
  premiered,
  ended,
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
            <Text bold fontSize={12}>
              Premiered: <Text fontSize={12}>{premiered}</Text>
            </Text>
            <Text bold fontSize={12}>
              Ended: <Text fontSize={12}>{ended}</Text>
            </Text>
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
