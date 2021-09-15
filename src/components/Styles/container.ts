import { css, SerializedStyles } from '@emotion/react';

const fluid = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const maxSm = css`
  max-width: 540px;
`;
const maxMd = css`
  max-width: 720px;
`;
const maxLg = css`
  max-width: 960px;
`;
const maxXl = css`
  max-width: 1140px;
`;
const maxXxl = css`
  max-width: 1320px;
`;
const mqSm = css`
  @media (min-width: 576px) {
    ${maxSm}
  }
`;
const mqMd = css`
  @media (min-width: 768px) {
    ${maxMd}
  }
`;
const mqLg = css`
  @media (min-width: 992px) {
    ${maxLg}
  }
`;
const mqXl = css`
  @media (min-width: 1200px) {
    ${maxXl}
  }
`;
const mqXxl = css`
  @media (min-width: 1400px) {
    ${maxXxl}
  }
`;

const smFluid = [fluid, maxSm];
const mdFluid = [fluid, maxMd];
const lgFluid = [fluid, maxLg];
const xlFluid = [fluid, maxXl];
const xxlFluid = [fluid, maxXxl];
const xxl = [fluid, mqXxl];
const xl = [fluid, mqXl, mqXxl];
const lg = [fluid, mqLg, mqXl, mqXxl];
const md = [fluid, mqMd, mqLg, mqXl, mqXxl];
const sm = [fluid, mqSm, mqMd, mqLg, mqXl, mqXxl];
const all = [fluid, mqSm, mqMd, mqLg, mqXl, mqXxl];
const noop = [css``];

type ContainerStyle = ({
  container,
}: CustomStyleProps) => false | SerializedStyles | SerializedStyles[];

// export const Fluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'fluid' && fluid;
// export const SmFluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'sm-fluid' && smFluid;
// export const MdFluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'md-fluid' && mdFluid;
// export const LgFluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'lg-fluid' && lgFluid;
// export const XlFluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'xl-fluid' && xlFluid;
// export const XxlFluid: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'xxl-fluid' && xxlFluid;
// export const All: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === true && all;
// export const Sm: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'sm' && sm;
// export const Md: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'md' && md;
// export const Lg: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'lg' && lg;
// export const Xl: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'xl' && xl;
// export const Xxl: ContainerStyle = ({ container }: CustomStyleProps) =>
//   container === 'xxl' && xxl;

const Container: ContainerStyle = ({ container }: CustomStyleProps) => {
  switch (container) {
    case 'fluid':
      return fluid;
    case 'sm-fluid':
      return smFluid;
    case 'md-fluid':
      return mdFluid;
    case 'lg-fluid':
      return lgFluid;
    case 'xl-fluid':
      return xlFluid;
    case 'xxl-fluid':
      return xxlFluid;
    case true:
      return all;
    case 'sm':
      return sm;
    case 'md':
      return md;
    case 'lg':
      return lg;
    case 'xl':
      return xl;
    case 'xxl':
      return xxl;
    default:
      return noop;
  }
};

export default Container;
