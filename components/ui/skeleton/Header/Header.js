import { Container } from 'react-bootstrap';
import Image from 'next/image';

import { css } from '@emotion/react'

export default function Header() {
  let headerContent = [
    {
      label: 'Cours',
      anchor: 'courses'
    },
    {
      label: 'Prerequisites',
      anchor: 'prerequisite'
    },
    {
      label: 'Certificats',
      anchor: 'certificates'
    },
    {
      label: 'FAQS',
      anchor: 'faq'
    },
    {
      label: 'S\'inscrire',
      anchor: 'signup',
      action: () => { }
    },
    {
      label: 'Se Connecter',
      anchor: 'signin',
      action: () => { }
    },
  ];

  return (
    <div className={'d-none d-lg-flex'}>
      <Container className={'bg-transparent px-0 py-3'}>
        <div className={'d-flex align-items-center justify-content-between'}>
          <>
            <Image
              src={'https://s3.amazonaws.com/thinkific-import/116598/cYiInJ14QTexS1zdpeTV_logo5.png'}
              alt={'AMC'}
              title={'AMC'}
              height={32}
              width={128}
              className='img-responsive' />
          </>
          <div className={'d-flex justify-content-between'}>
            {headerContent.map((value, index) => <div className={index != headerContent.length - 1 ? 'mr-4' : ''} key={`header-content-${index}`}>
              <span css={css`font-size: 14px;`}>{value.label.toUpperCase()}</span>
            </div>)}
          </div>
        </div>
      </Container>
    </div>
  )
}