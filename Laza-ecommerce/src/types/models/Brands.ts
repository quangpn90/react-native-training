import { StyleProp, TextStyle } from 'react-native';

export interface IBrand {
  id: string;
  name: string;
  logoUrl: string;
}

export interface IBrandCardProps {
  brand: IBrandCardListProps;
  onPressBrandCard: (id: string) => void;
  brandCardStyles?: StyleProp<TextStyle>;
}

export interface IBrandCardListProps extends IBrand {
  brandCardListStyles?: StyleProp<TextStyle>;
}

export interface IBrandsListProps {
  brands: IBrandCardListProps[];
  onPressBrandCard: (id: string) => void;
  onLoadMoreBrands: () => void;
}

export interface IBrandsResponse {
  data: {
    data: IBrand[];
    pagination: {
      _page?: number;
      _totalRows?: number;
      _limit: number;
    };
  };
}
