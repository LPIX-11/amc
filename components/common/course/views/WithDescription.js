import { Flex } from '../../../ui/Display/Flex';
import { Text } from '../../Text/Text';

import Image from 'next/image';
import { css } from '@emotion/react'
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import CertificateBadge from '../../certificate/CertificateBadge';
import { ToFCFA } from '../../../../src/ToCurrency';

import { FaAngleDown } from 'react-icons/fa';
import { RiComputerFill, RiComputerLine } from 'react-icons/ri';

const CourseOverview = () => {
  return (
    <Accordion defaultActiveKey='0'>
      {
        [{ title: 'Intro' }, { title: 'Dev' }, { title: 'Conclu' }].map((item, index) => (
          <Card className={'border-0'} key={`c-overview-${index}`}>
            <Card.Header className={'border-bottom-0 bg-light border-top py-0'}>
              <Accordion.Toggle as={Button} variant={'span'} eventKey={`${index}`} className={'px-0 w-100'}>
                <Flex items={'center'} content={'space-between'} class={'w-100'}>
                  <Flex items={'center'}>
                    <RiComputerLine size={14} className={'active mr-2'} />
                    <Text
                      bold
                      text={item.title}
                      size={14}
                    />
                  </Flex>
                  <FaAngleDown style={{ width: 14 }} className={'active'} />
                </Flex>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  )
}

const ModalContent = () => {
  return (
    <Row className={'pb-4'}>
      <Col lg={6} className={'d-none d-lg-flex'}>Blue</Col>
      <Col sm={12} lg={6}>
        <CourseOverview />
      </Col>
    </Row>
  )
}

export default function WithDescription({ modalInfos, displayInfos, image, title, subtitle, description, price, hasCertificated }) {
  const _modalInfos = () => {
    modalInfos({
      title: <Text text={title} bold display={'flex'} textClass={'text-center'} />,
      children: <ModalContent />
    })
    displayInfos.toggle()
  }

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

      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'} onClick={_modalInfos}>Regarder la présentation</Button>
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'} onClick={displayInfos.toggle}>Regarder la première leçon</Button>
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mb-3'} variant={'outline-primary'} onClick={displayInfos.toggle}>Lire le cursus</Button>
      <Text text={ToFCFA(price)} size={'1em'} textClass={'text-center'} display={'flex'} />
      <Button className={'w-85 py-2 rounded-0 shadow-on-hover mt-3'} variant={'primary'}>Prendre ce cursus</Button>
    </Flex>
  )
}