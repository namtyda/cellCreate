import React from 'react'
import {
  CardWrapper,
  CardAvatar,
  CardDescription,
  CardInfoWrapper,
  CardName
} from '../interfaces';

export const Card = ({ background, title, description, icon }) => {
  return (
    <CardWrapper>
      <CardAvatar
        background={background}
        icon={icon}
      />
      <CardInfoWrapper>
        <CardName>
          {title}
        </CardName>
        <CardDescription>
          {description}
        </CardDescription>
      </CardInfoWrapper>
    </CardWrapper>
  );
}