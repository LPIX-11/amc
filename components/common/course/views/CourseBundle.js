import { Container, Button } from 'react-bootstrap';
import BlockSeparator from '../../../ui/BlockSeparator/BlockSeparator';
import { Text } from '../../Text/Text';
import { ToFCFA } from '../../../../src/ToCurrency';
import { Flex } from '../../../ui/Display/Flex';
import Image from 'next/image';

export default function CourseBundle({
  title,
  subtitle,
  description,
  price,
  image,
}) {
  return (
    <div className={'bg-light py-5 w-100'}>
      <Container className={'px-3 px-sm-2 bg-light w-100'}>
        <Flex>
          <Flex column>
            <>
              <h3 className={'font-weight-bold'}>{title}</h3>
              <BlockSeparator color={'#007bff'} />
              <h4 className={'font-secondary'}>{subtitle}</h4>
            </>
            <Text text={description} paddingTop={20} paddingBottom={20} />

            <BlockSeparator color={'#ededed'} size={'w-100'} />

            <Text bold text={ToFCFA(price)} />

            <Button
              className={'w-50 py-2 rounded-0 shadow-on-hover mt-3'}
              variant={'primary'}
            >
              Prendre ce cursus
            </Button>
          </Flex>

          <Flex
            items={'center'}
            class={'d-none d-lg-flex p-5 position-relative'}
          >
            <Image src={image} height={1840} width={2080} />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
