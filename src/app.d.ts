/// <reference types="history" />
/// <reference types="node" />
/// <reference types="react-dom" />
/// <reference types="react-router-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.frag' {
  const value: string;
  export default value;
}

declare module '*.vert' {
  const value: string;
  export default value;
}

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.tga' {
  const value: string;
  export default value;
}

declare module '*.mdd' {
  const value: string;
  export default value;
}

declare module '*.csv' {
  const value: string;
  export default value;
}

declare module '*.xml' {
  const value: string;
  export default value;
}

declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';

interface IAppContext {
  isDarkMode: boolean;
  toggleMode: () => void;
}

interface ISite {
  title: string;
  description: string;
  url: string;
}

interface IPage {
  name: string;
  title: string;
  path: string;
  layout: React.ComponentType<{ page: IPage }>;
  component: React.LazyExoticComponent;
  private?: boolean;
}

interface IPageMap {
  [key: string]: IPage;
}

type LayoutType = 'blank' | 'main' | 'basic' | 'page' | 'doc';

type MenuLinkType = 'link' | 'button' | 'dropdownbutton' | 'splitbutton';

interface IMenuLink {
  name: string;
  type: MenuLinkType;
  href?:
    | LocationDescriptor<unknown>
    | ((location: Location<unknown>) => LocationDescriptor<unknown>);
  exact?: boolean;
  mega?: boolean;
  submenuLinks?: ISubmenuLink[];
}

interface ISubmenuLink {
  name: string;
  title: string;
  href: string;
}

interface IBreadcrumbNameMap {
  [key: string]: string;
}

interface BreadcrumbsProps {
  pathname: string;
  'aria-label'?: string;
}

interface IMenuLinkRefs {
  [key: string]: React.RefObject<HTMLAnchorElement & HTMLButtonElement>;
}

interface ISubmenuLinkRefs {
  [key: string]: React.RefObject<HTMLAnchorElement & HTMLButtonElement>[];
}

interface IOpenStates {
  [key: string]: boolean;
}

interface IViewportContext {
  innerWidth?: number;
  innerHeight?: number;
  clientWidth?: number;
  clientHeight?: number;
}

interface IMobileNavContext {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

type UnderlineType = 'none' | 'hover' | 'always';

type LinkStyleProps = {
  underline?: UnderlineType;
};

interface ISidebarLink {
  label: string;
  href: string;
}

interface ISidebarItem {
  label: string;
  items: ISidebarLink[];
}

type ISidebar = ISidebarItem[];

type FlexAlignType =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'center'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

type ContainerType =
  | boolean
  | 'fluid'
  | 'sm-fluid'
  | 'md-fluid'
  | 'lg-fluid'
  | 'xl-fluid'
  | 'xxl-fluid'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

type TextAlignType = 'left' | 'right' | 'center' | 'justify';

type CustomStyleProps = {
  align?: FlexAlignType;
  container?: ContainerType;
  textAlign?: TextAlignType;
  isSidebarOpen?: boolean;
  clientHeight?: number;
};

// type FlexboxStyleProps = {
//   align?: FlexAlignType
// }

// type ContainerStyleProps = {
//   container?: ContainerType
// }

// type TextAlignStyleProps = {
//   textAlign?: TextAlignType
// }

// interface CustomStyleProps {}

// interface FlexboxStyleProps extends CustomStyleProps {
//   align?: FlexAlignType
// }

// interface ContainerStyleProps extends CustomStyleProps {
//   container?: ContainerType
// }

// interface TextAlignStyleProps extends CustomStyleProps {
//   textAlign?: TextAlignType
// }

type LabelProps = JSX.IntrinsicElements['label'];

type InputProps = JSX.IntrinsicElements['input'];

type SelectProps = JSX.IntrinsicElements['select'];

type ButtonProps = JSX.IntrinsicElements['button'];

type ImageProps = JSX.IntrinsicElements['img'];
