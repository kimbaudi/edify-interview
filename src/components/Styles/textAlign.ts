import { css, SerializedStyles } from '@emotion/react';

const left = css`
  text-align: left;
`;

const right = css`
  text-align: right;
`;

const center = css`
  text-align: center;
`;

const justify = css`
  text-align: justify;
`;

const noop = css``;

type TextAlignStyle = ({ textAlign }: CustomStyleProps) => SerializedStyles;

const TextAlign: TextAlignStyle = ({ textAlign }: CustomStyleProps) => {
  switch (textAlign) {
    case 'left':
      return left;
    case 'right':
      return right;
    case 'center':
      return center;
    case 'justify':
      return justify;
    default:
      return noop;
  }
};

export default TextAlign;
