import { css } from '@emotion/react';

export default function BlockSeparator({ size, color }) {
  return (
    <div
      className={`border-top border-3 ${size ? size : 'w-5'} my-4`}
      css={css`
        border-color: ${color} !important;
      `}
    ></div>
  );
}
