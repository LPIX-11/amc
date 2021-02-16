import { css } from '@emotion/react';
import { Button } from 'react-bootstrap';

import Banner from '../../ui/Banner/Banner';
import BlockSeparator from '../../ui/BlockSeparator/BlockSeparator';

export default function Hero() {
  return (
    <Banner bg={'linear-gradient(rgba(141,95,211,0.23), rgba(141,95,211,0.23)),url("https://pirple.s3.amazonaws.com/progressive-bg.jpg")'} >
      <div className={'d-flex justify-content-center align-items-center h-100 flex-column'}>
        <span className={'text-white text-center'} css={css`font-family: roboto thin, sans-serif; font-size: 3rem;`}>
          Welcome to here you are
          </span>

        <BlockSeparator size={'sm'} color={'#FFF'} />

        <div className={'d-flex flex-column justify-contnet-center'}>
          <span className={'text-white text-center pb-2'} css={css`font-size: 24px`}>
            Join the 10,000+ students
          </span>
          <span className={'text-white'} css={css`font-size: 24px`}>
            who have learned to code here.
          </span>

          <div className={'row mx-0 px-0 px-sm-3 align-items-center justify-content-center mt-5 w-100'}>
            <div className={'col-12 col-sm-6 px-0 px-sm-3'}>
              <a href={'#'} className={'btn btn-primary w-100 py-2'}>Join my stuff</a>
            </div>

            <div className={'col-12 col-sm-6 px-0 mt-3 mt-sm-0'}>
              <Button className={'w-100 py-2'} variant={'outline-primary'}>Join my stuff</Button>
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}