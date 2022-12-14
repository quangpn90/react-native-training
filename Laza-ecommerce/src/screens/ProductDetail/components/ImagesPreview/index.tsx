import React, { memo } from 'react';
import { ScrollView, Pressable, Image } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Styles
import styles from './styles';

export const ImagesPreview = ({ imagesPreview }: IProductDetailItemProps) => {
  return (
    <ScrollView style={styles.productImageReview} horizontal showsHorizontalScrollIndicator={false}>
      {Boolean(imagesPreview) &&
        imagesPreview?.map(item => (
          <Pressable style={styles.productImageReviewWrapper} key={item.id}>
            <Image style={styles.imagePreview} source={{ uri: item.image }} resizeMode='cover' />
          </Pressable>
        ))}
    </ScrollView>
  );
};

export default memo(ImagesPreview, isEqual);
