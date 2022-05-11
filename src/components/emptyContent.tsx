import React, { FC } from "react";

import { EmptyContentStyle } from '../styles/emptyContent.styles';

type EmptyContentPropsType = {
  img: string,
  description: string
}

export const EmptyContent:FC<EmptyContentPropsType> = ({img,description}) => (
  <EmptyContentStyle>
    <img src={img} alt={description} />
    <p>{description}</p>
  </EmptyContentStyle>
)
