import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';

export default function Banner({ bg, dimensions = { width: '100%', height: 540 }, children }) {
  return (
    <div css={css`
      background: ${bg};
      background-color: #2700ec;
      width: ${dimensions.width};
      height: ${dimensions.height}px;
    `}>
      <Container className={'h-100'}>
        {children}
      </Container>
    </div>
  )
}