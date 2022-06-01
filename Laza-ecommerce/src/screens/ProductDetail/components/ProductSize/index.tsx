import React, { memo } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Constants
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Types
import { ProductSizeProps } from 'types/models/Products';

// Styles
import styles from './styles';

const ProductSize = ({ sizes }: IProductDetailItemProps) => {
  return (
    <View style={styles.sizeContainer}>
      <View style={styles.textSizeWrapper}>
        <Text style={styles.textSize}>Size</Text>
        <Text style={styles.textSizeGuide}>Size Guide</Text>
      </View>

      <ScrollView style={styles.sizeWrapper} horizontal showsHorizontalScrollIndicator={false}>
        {Boolean(sizes) &&
          sizes?.map((item: ProductSizeProps) => (
            <Pressable style={styles.sizeItem} key={item.id}>
              <Text style={styles.textSize}>{item.size}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};

export default memo(ProductSize, isEqual);
