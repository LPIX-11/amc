import { css } from '@emotion/react';
import { Text } from '../Text/Text';
import style from './CertificateBadge.module.css';

export default function CertificateBadge({ message, position = {} }) {

  return (
    <div className={`text-center ${style.certificateBadge}`} css={css`
        position: absolute;
        ${position && position.top >= 0 ? `top: ${position.top}px` : ''};
        ${position && position.right >= 0 ? `right: ${position.right}px` : ''};
        ${position && position.bottom >= 0 ? `bottom: ${position.bottom}px` : ''};
        ${position && position.left >= 0 ? `left: ${position.left}px` : ''};
        z-index: 1;
      `}>
      <Text bold text={message} size={'.8em'} display={'flex'} alignment={'center'} textClass={'text-center text-white pt-1'} />
    </div>
  )
}