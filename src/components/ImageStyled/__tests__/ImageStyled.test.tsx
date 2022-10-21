import React from 'react'
import {render} from '@testing-library/react-native'

// Styled
import {Image} from '../ImageStyled.styles'

import {Images} from '@themes/Images'

const props = {
  source: Images.virtualCard,
  height: 300,
}

describe('Image', () => {
  const normalImage = render(<Image.Normal {...props} />)
  test('should render normal image correctly', () => {
    const tree = normalImage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
