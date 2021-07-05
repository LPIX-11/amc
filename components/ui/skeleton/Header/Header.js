import { Container } from 'react-bootstrap';
import Image from 'next/image';

import { css } from '@emotion/react';

import router from 'next/router';

export default function Header() {
  let headerContent = [
    {
      label: 'Cours',
      anchor: 'courses',
    },
    {
      label: 'Prerequisites',
      anchor: 'prerequisite',
    },
    {
      label: 'Certificats',
      anchor: 'certificates',
    },
    {
      label: 'FAQS',
      anchor: 'faq',
    },
    {
      label: "S'inscrire",
      anchor: 'signup',
      action: () => router.push('/user/register'),
    },
    {
      label: 'Se Connecter',
      anchor: 'signin',
      action: () => router.push('/user/login'),
    },
  ];

  return (
    <div className={'d-none d-lg-flex'}>
      <Container className={'bg-transparent px-0 py-3'}>
        <div className={'d-flex align-items-center justify-content-between'}>
          <div onClick={() => router.push('/')}>
            <Image
              src={
                'https://s3.amazonaws.com/thinkific-import/116598/cYiInJ14QTexS1zdpeTV_logo5.png'
              }
              alt={'AMC'}
              title={'AMC'}
              height={32}
              width={128}
              className={'img-responsive'}
            />
          </div>
          <div className={'d-flex justify-content-between'}>
            {headerContent.map((option, index) => (
              <div
                className={`cursor-pointer ${
                  index != headerContent.length - 1 ? 'mr-4' : ''
                }`}
                key={`header-content-${index}`}
                {...(option.action && {
                  onClick: () => option.action(),
                })}
              >
                <span
                  css={css`
                    font-size: 14px;
                  `}
                >
                  {option.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
