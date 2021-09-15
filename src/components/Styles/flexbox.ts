import { css, SerializedStyles } from '@emotion/react';

const flex = css`
  display: flex;
`;

const xLeft = css`
  justify-content: flex-start;
`;

const xCenter = css`
  justify-content: center;
`;

const xRight = css`
  justify-content: flex-end;
`;

const yTop = css`
  align-items: flex-start;
`;

const yCenter = css`
  align-items: center;
`;

const yBottom = css`
  align-items: flex-end;
`;

const topLeft = [flex, xLeft, yTop];
const top = [flex, xCenter, yTop];
const topRight = [flex, xRight, yTop];
const left = [flex, xLeft, yCenter];
const center = [flex, xCenter, yCenter];
const right = [flex, xRight, yCenter];
const bottomLeft = [flex, xLeft, yBottom];
const bottom = [flex, xCenter, yBottom];
const bottomRight = [flex, xRight, yBottom];
const noop = [css``];

type FlexAlignStyle = ({ align }: CustomStyleProps) => SerializedStyles[];

const FlexAlign: FlexAlignStyle = ({ align }: CustomStyleProps) => {
  switch (align) {
    case 'top-left':
      return topLeft;
    case 'top':
      return top;
    case 'top-right':
      return topRight;
    case 'left':
      return left;
    case 'center':
      return center;
    case 'right':
      return right;
    case 'bottom-left':
      return bottomLeft;
    case 'bottom':
      return bottom;
    case 'bottom-right':
      return bottomRight;
    default:
      return noop;
  }
};

export default FlexAlign;
