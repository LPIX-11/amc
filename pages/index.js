import Layout from '../components/ui/skeleton/Layout'
import Hero from '../components/common/Hero/Hero';
import { Container } from 'react-bootstrap';
import BlockSeparator from '../components/ui/BlockSeparator/BlockSeparator';

import { css } from '@emotion/react';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        <Container className={'d-flex align-items-center flex-column py-4 my-5'}>
          <span css={css`font-family: Roboto Thin, sans-serif; font-size: 2rem;`}>Choose Your Courses</span>

          <BlockSeparator color={'#007bff'} />

          <span className={'text-center'} css={css`font-family: Poppins Thin, sans-serif; font-size: 1.3rem;`}>
            Each course consists of video-lectures, homework assignments, quizzes, projects, and a final exam. Scroll down to read the curricula, and to watch overviews and sample lectures.
          </span>
        </Container>
      </Layout>
    </>
  )
}
