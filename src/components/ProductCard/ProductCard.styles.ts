import styled from 'styled-components/native'

// Themes
import {Colors, Metrics} from '@themes'

export const ProductCardWrapperStyled = styled.View`
  margin-bottom: ${Metrics.margin.medium}px;
  background-color: ${Colors.background};
`
export const ImageWrapperStyled = styled.Pressable`
  border-radius: ${Metrics.borderRadius.medium}px;
  margin-bottom: ${Metrics.margin.tiny}px;
  overflow: hidden;
`

export const IconHeartWrapperStyled = styled.Pressable`
  position: absolute;
  top: 14px;
  right: 15px;
  z-index: 1;
`
