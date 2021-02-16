import { css } from '@emotion/react';

export default function BlockSeparator({ size, color }) {
  return (
    <div className={'border-top border-3 w-100 w-5 my-4'} css={css`border-color: ${color} !important;`}>
    </div>
  )
}