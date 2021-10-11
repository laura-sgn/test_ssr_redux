import { css } from '@emotion/react';

import { FONT_FAMILY_DEFAULT, FONT_WEIGHT_HEADER, FONT_WEIGHT_TEXT } from './fonts';

export default css`
  // OVERRRIDES
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
  }
  html,
  body,
  #__next {
      width: 100%;
      height: 100%;
      background: #fff8dc;
  }
  body {
      font-family: ${FONT_FAMILY_DEFAULT}, sans-serif;
      font-weight: ${FONT_WEIGHT_TEXT};
      color: black;
      margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-weight: ${FONT_WEIGHT_HEADER};
      margin: 0;
  }
  svg {
      height: 1rem;
      width: 1rem;
  }
  a {
      color: black;
      text-decoration: none;
      &:not([disabled]) {
          svg {
              cursor: pointer;
          }
      }
      &[disabled] {
          pointer-events: none;
      }
  }
  textarea {
      font-family: ${FONT_FAMILY_DEFAULT};
      min-height: 5rem;
  }
  div,
  }
`