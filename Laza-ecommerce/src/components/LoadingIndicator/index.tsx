import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';
import { SafeAreaView } from 'react-native-safe-area-context';

// Types
import { ILoadingIndicatorProps, LOADING_SIZE } from 'types/components/LoadingIndicator';

// Themes
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const LoadingIndicator = ({
  size = LOADING_SIZE.LARGE,
  color = Colors.secondaryColor,
}: ILoadingIndicatorProps) => (
  <SafeAreaView>
    <ActivityIndicator style={styles.loading} size={size} color={color} />
  </SafeAreaView>
);

export default memo(LoadingIndicator, isEqual);
