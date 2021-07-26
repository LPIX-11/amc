import { css } from '@emotion/react';

export default function BlockSeparator({ light, size, color }) {
  return (
    <div
      className={`border-top ${light ? 'border-1' : 'border-3'} ${
        size ? size : 'w-5'
      } my-4`}
      css={css`
        border-color: ${color} !important;
      `}
    ></div>
  );
}
