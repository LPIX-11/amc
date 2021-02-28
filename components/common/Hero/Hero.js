import { css } from '@emotion/react';
import { Button, Row } from 'react-bootstrap';
import useWindowSize from '../../../src/hooks/useWindowsSize';

import Banner from '../../ui/Banner/Banner';
import BlockSeparator from '../../ui/BlockSeparator/BlockSeparator';
import { Flex } from '../../ui/Display/Flex';

export default function Hero() {
  const { width } = useWindowSize();

  const position = width <= 599.99 ? 541 : 635;

  return (
    <Banner bg={'linear-gradient(rgba(141,95,211,0.23), rgba(141,95,211,0.23)),url("https://pirple.s3.amazonaws.com/progressive-bg.jpg")'} >
      <div className={'d-flex justify-content-center align-items-center h-100 flex-column'}>
        <span className={'text-white text-center'} css={css`font-family: roboto thin, sans-serif; font-size: 3rem;`}>
          Bienvenue à l'Académie
        </span>

        <BlockSeparator size={'sm'} color={'#FFF'} />

        <Flex column content={'center'}>
          <span className={'text-white text-center pb-2'} css={css`font-size: 24px`}>
            Rejoignez les 10,000+ étudians
          </span>
          <span className={'text-white'} css={css`font-size: 24px`}>
            qui sont déjà passé apprendre ici.
          </span>
        </Flex>

        <Flex content={'center'} class={'w-100 w-sm-50'}>
          <Row className={'mx-0 px-0 px-sm-3 align-items-center justify-content-center mt-5 w-100'}>
            <div className={'col-12 col-sm-7 px-0 px-sm-3'}>
              <Button variant={'primary'} className={'w-100 py-2 rounded-0 shadow-on-hover'}>
                Qui sommes-nous?
              </Button>
            </div>

            <div className={'col-12 col-sm-5 px-0 mt-3 mt-sm-0'}>
              <Button className={'w-100 py-2 rounded-0 shadow-on-hover'} variant={'outline-primary'} onClick={() => window.scrollTo({ top: position, behavior: 'smooth' })}>Choisissez vos cours</Button>
            </div>
          </Row>
        </Flex>
      </div>
    </Banner>
  )
}