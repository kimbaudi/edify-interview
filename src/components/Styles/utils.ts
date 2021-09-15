import { css } from '@emotion/react';

export const hideScrollbar = css`
  // hide scrollbar
  /* Chrome, Edge, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
`;

// visually hide elements
// but keep them accessible to assistive technologies
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`;

// display visually hidden elements when its focused
// but keep them accessible to assistive technologies
export const visuallyHiddenFocusable = css`
  &:not(:focus):not(:focus-within) {
    ${visuallyHidden}
  }
`;

export const fixPaddingBottom = css`
  // fix Firefox ignoring padding-bottom
  // this seems to be fixed (currently Firefox v89)
  // https://stackoverflow.com/questions/48687129/padding-bottom-not-working-in-firefox-ie11
  // https://stackoverflow.com/questions/29986977/firefox-ignores-padding-when-using-overflowscroll
  // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
  li:not(.mega) & {
    padding-bottom: 0;
    :after {
      content: '';
      display: block;
      padding-bottom: 0.5rem;
    }
  }
`;

export const fixGridPaddingBottom = css`
  // fix Chrome/Firefox ignoring padding-bottom on CSS Grid
  // this seems to be fixed (currently Chrome v91/Firefox v89)
  .mega & {
    padding-bottom: 0;
    > *:last-child {
      padding-bottom: 0.5rem;
    }
  }
`;
