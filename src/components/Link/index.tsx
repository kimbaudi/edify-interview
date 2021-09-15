import { AnchorHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';
import styled from '@emotion/styled';
import Underline from 'components/Styles/underline';

type InternalLinkProps = RouterLinkProps & LinkStyleProps;

type InternalNavLinkProps = RouterNavLinkProps & LinkStyleProps;

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkStyleProps;

const InternalLink = styled(RouterLink)<LinkStyleProps>`
  ${Underline}
`;

const StyledAnchor = styled.a<LinkStyleProps>`
  ${Underline}
`;

const StyledNavLink = styled(RouterNavLink)<LinkStyleProps>`
  ${Underline}
`;

export default forwardRef<
  HTMLAnchorElement,
  InternalLinkProps | ExternalLinkProps
>(function Link(
  props: InternalLinkProps | ExternalLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return 'to' in props ? (
    <InternalLink ref={ref} {...props} />
  ) : (
    <StyledAnchor ref={ref} {...props} />
  );
});

export const NavLink = forwardRef<HTMLAnchorElement, InternalNavLinkProps>(
  (props: InternalNavLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <StyledNavLink ref={ref} {...props} />
  )
);
