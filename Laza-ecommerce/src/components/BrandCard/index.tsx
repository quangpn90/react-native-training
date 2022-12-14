import React, { memo, useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';
import FastImage from 'react-native-fast-image';

// Components
import Title from 'components/Title';

// Types
import { IBrandCardProps } from 'types/models/Brands';

// Styles
import styles from './styles';

const BrandCard = ({ brand, onPressBrandCard, brandCardStyles }: IBrandCardProps) => {
  // handle action press card brand
  const handlePressBrandCard = useCallback(() => {
    onPressBrandCard(brand.id);
  }, [brand.id, onPressBrandCard]);

  return (
    <TouchableOpacity
      testID='brandCard'
      onPress={handlePressBrandCard}
      style={[styles.brandCardContainer, brandCardStyles]}>
      <View style={[styles.brandCardWrapper]}>
        <View style={styles.brandLogoWrapper}>
          <FastImage
            style={styles.brandLogo}
            source={{
              uri: brand?.logoUrl,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <Title titleName={brand.name} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(BrandCard, isEqual);
