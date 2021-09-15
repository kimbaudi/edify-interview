import { css, SerializedStyles } from '@emotion/react';

const underlineNone = css`
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;

const underlineHover = css`
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;

const underlineAlways = css`
  &:link {
    text-decoration: underline;
  }
  &:visited {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

const noop = css``;

type UnderlineStyle = ({ underline }: LinkStyleProps) => SerializedStyles;

const Underline: UnderlineStyle = ({ underline }: LinkStyleProps) => {
  switch (underline) {
    case 'none':
      return underlineNone;
    case 'always':
      return underlineAlways;
    case 'hover':
      return underlineHover;
    default:
      return noop;
  }
};

export default Underline;
