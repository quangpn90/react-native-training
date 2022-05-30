import React, { memo, useCallback } from 'react';
import { Alert, Image, ImageBackground, Pressable, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Theme
import IMAGES from 'themes/Images';

// Types
import { IProductDetailHeaderProps } from 'types/screens/ProductDetail';

// Style
import styles from './styles';

const ProductDetailHeader = ({ product, navigation }: IProductDetailHeaderProps) => {
  // handle back button
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // handle action press button cart
  const onPressCart = useCallback(() => {}, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.actionsWrapper}>
        <Pressable onPress={onPressBack}>
          <Image style={styles.backIcon} source={IMAGES.iconBack} />
        </Pressable>
        <Pressable onPress={onPressCart}>
          <Image style={styles.cartIcon} source={IMAGES.iconCart} />
        </Pressable>
      </View>
      {/* End action header */}

      <View style={styles.headerImageWrapper}>
        {Boolean(product) && (
          <ImageBackground style={styles.image} source={{ uri: product?.source }} />
        )}
      </View>
      {/* End Header block */}
    </View>
  );
};

export default memo(ProductDetailHeader, isEqual);
