/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import logo from './logo.svg';

export const LogoIcon = () => (
  <img
    src={logo}
    alt="logo"
    width="12px"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
