import React, { memo } from 'react';
import { Text } from 'react-native';

// Types
import { ITitleProps } from 'types/components/Title';

// Styles
import styles from './styles';

const Title = ({ titleName, titleStyles }: ITitleProps) => {
  return <Text style={[styles.title, titleStyles]}>{titleName}</Text>;
};

export default memo(Title);
