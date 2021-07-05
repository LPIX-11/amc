import { useState } from 'react';

import Layout from '../components/ui/skeleton/Layout';
import Hero from '../components/common/Hero/Hero';
import { Col, Container, Row } from 'react-bootstrap';
import BlockSeparator from '../components/ui/BlockSeparator/BlockSeparator';

import { css } from '@emotion/react';
import Course from '../components/common/course/Course';
import { Flex } from '../components/ui/Display/Flex';

import CustomModal from '../components/common/modal/CustomModal';
import CourseBundle from '../components/common/course/views/CourseBundle';

export default function Home({ courses }) {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = {
    onHide: () => setDisplayModal(!displayModal),
    show: displayModal,
    toggle: () => setDisplayModal(!displayModal),
  };

  const [modalInfos, setModalInfos] = useState({});

  return (
    <>
      <Layout>
        <Hero />

        <Container
          className={'d-flex align-items-center flex-column py-4 my-5'}
        >
          <span
            css={css`
              font-family: Roboto Thin, sans-serif;
              font-size: 2rem;
            `}
          >
            Choisissez Vos Cours
          </span>

          <BlockSeparator color={'#007bff'} />

          <span
            className={'text-center'}
            css={css`
              font-family: Poppins Thin, sans-serif;
              font-size: 1.3rem;
            `}
          >
            Chaque cours comprend des vidéoconférences, des devoirs, des quiz,
            des projets et un examen final. Faites défiler vers le bas pour lire
            les programmes et pour regarder des aperçus et des exemples de
            conférences.
          </span>
        </Container>

        <Flex class={'mx-xl-5 px-xl-5'}>
          <Container fluid className={'bg-transparent px-0 py-3'}>
            <Row className={'w-100 px-0 px-lg-5 mx-0'}>
              {courses.length &&
                courses.map((course) => (
                  <Col
                    sm={12}
                    lg={4}
                    className={
                      'px-0 px-lg-3 mx-3 mx-lg-0 mb-4 mb-lg-0 pb-0 pb-lg-4'
                    }
                    key={`course-${course.title}`}
                  >
                    <Course
                      withDescription
                      hasCertificated
                      displayInfos={toggleModal}
                      modalInfos={setModalInfos}
                      image={course.cover}
                      title={course.title}
                      description={course.description}
                      price={course.price}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </Flex>
        <Container fluid className={'bg-transparent px-0 py-3'}>
          <CourseBundle
            title={'14 Course Bundle Pack'}
            subtitle={'Save 99.5% when you buy in bulk.'}
            description={
              'Get lifetime access to all 14 of our courses: Java, R, C#, Data Mining, Flask, Android, Python, Node.js, Javascript, HTML & CSS, Swift & Xcode, iOS, MacOS, and C++. All 14 certificates are included as well. This bundle pack costs a total of $27 USD, which is less than $1.93 per course! '
            }
            price={30000}
            image={'https://pirple.s3.amazonaws.com/stripe/stripe-js.png'}
          />
        </Container>

        <CustomModal
          borderless
          size={'lg'}
          display={toggleModal}
          title={modalInfos.title ? modalInfos.title : ''}
        >
          {modalInfos.children && modalInfos.children}
        </CustomModal>
      </Layout>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      courses: [
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-html.png',
          title: 'Frontend Fundamentals',
          description:
            "Learn the basics of HTML and CSS with this quick and easy course. If you're looking for a place to start your journey as a web-developer, then look no further. No prerequisites. No experience required. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 1-2 weeks.",
          price: 50000,
        },
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-js.png',
          title: 'Keeping Up with the Javascripts: ES6',
          description:
            'Spread, rest, maps, sets, destructuring, template literals, classes, try/catch/finally, promises, fetch, Babel, Webpack, Gulp and more. This course is suitable for beginners. No experience required. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 10-11 weeks.',
          price: 45000,
        },
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-node.png',
          title: 'The Node.js Master Class',
          description:
            'Learn Node.js from scratch with no frameworks and no dependencies. The course consists of 83 video lectures, 3 large projects, 7 small projects, 6 homework assignments, a few quizzes, and a final exam. Prerequisites: Javascript (ES5), HTML, CSS, and basic shell commands. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 10-14 weeks.',
          price: 50000,
        },
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-python2.png',
          title: 'Python is Easy',
          description:
            'Learn the fundamentals of Python, and build 3 real projects. We cover Variables, Functions, Statements, Lists, Loops, Sets, Dictionaries, I/O, Classes, Libraries, Error-Handling and more. This course is suitable for beginners. No experience required. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 3-5 weeks.',
          price: 60000,
        },
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-flask.png',
          title: 'Full Stack Web Development with Flask',
          description:
            'Learn the 4 key areas of full stack development: Frontend, Backend, Database design, and Hosting. Use Python3, Flask, Twitter Bootstrap and SQLite to build a fully-functional web application, then deploy it to a virtual server on Digital Ocean. Prerequisites: Python 2 or Python 3, HTML, CSS and Javascript. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 4-6 weeks.',
          price: 30000,
        },
        {
          cover: 'https://pirple.s3.amazonaws.com/stripe/stripe-mining.png',
          title: 'Data Mining With Python',
          description:
            'Learn Cluster Analysis, Classification and Regression, SVM, SVC, SVR, Dimensionality Reduction, Apache Spark, Network Mining, Text Mining, Natural Language Processing, Count Vectorizer, TFIDF and more. Prerequisites: Python 2 or Python 3. This course is self-paced but the assignments and tests are mandatory and cannot be skipped. On average, our students complete the whole course in 8-10 weeks.',
          price: 75000,
        },
      ],
    },
    revalidate: 30,
  };
};
