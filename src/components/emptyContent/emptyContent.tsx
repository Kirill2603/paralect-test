import React, { FC, memo } from 'react';

import { EmptyContentStyle } from './emptyContent.styles';

type EmptyContentPropsType = {
  img: string,
  description: string
}

export const EmptyContent:FC<EmptyContentPropsType> = memo(({img,description}) => (
  <EmptyContentStyle>
    <img src={img} alt={description} />
    <p>{description}</p>
  </EmptyContentStyle>
))
