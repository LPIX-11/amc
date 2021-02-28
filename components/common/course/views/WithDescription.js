import { Flex } from '../../../ui/Display/Flex';
import { Text } from '../../Text/Text';

import Image from 'next/image';
import { css } from '@emotion/react'
import { Button } from 'react-bootstrap';
import CertificateBadge from '../../certificate/CertificateBadge';
import { ToFCFA } from '../../../../src/ToCurrency';

export default function WithDescription({ image, title, subtitle, description, overview, price, hasCertificated }) {

  return (
    <Flex column items={'center'} class={'border border-gray p-4'}>
      <Flex css={css`height: 195px; width: 356px`}>
        <Flex content={'center'} content={'center'} class={'position-relative'} height={186} width={214}>
          <Image layout={'fill'} src={image} />
          {hasCertificated && <CertificateBadge message={'Certificate Included'} position={{ right: 0, bottom: 20 }} />}
        </Flex>
      </Flex>

      <div className={'py-2'}>
        <Text text={title} size={'1.4em'} bold display={'flex'} textClass={'text-center'} />
      </div>
      <div>{subtitle && <Text text={subtitle} />}</div>

      <Text text={description} size={'1em'} textClass={'text-center'} display={'flex'} paddingBottom={20} />

      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'}>Regarder la présentation</Button>
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'}>Regarder la première leçon</Button>
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'}>Lire le cursus</Button>
      <Text text={ToFCFA(price)} size={'1em'} textClass={'text-center'} display={'flex'} />
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mt-3'} variant={'primary'}>Prendre ce cursus</Button>
    </Flex>
  )
}