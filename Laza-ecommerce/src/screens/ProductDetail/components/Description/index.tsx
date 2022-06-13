import React, { memo } from 'react';
import { View } from 'react-native';

// Components
import Title from 'components/Title';
import MoreLessText from 'components/LessMoreText';

// LIBS
import isEqual from 'react-fast-compare';

// Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Styles
import styles from './styles';

const Description = ({ description }: IProductDetailItemProps) => {
  return (
    <View style={styles.descriptionContainer}>
      <Title titleName='Description' titleStyles={styles.textDescriptionTitle} />
      {Boolean(description) && (
        <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
          {description}
        </MoreLessText>
      )}
    </View>
  );
};

export default memo(Description, isEqual);
