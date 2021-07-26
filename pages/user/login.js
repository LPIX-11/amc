import Layout from '../../components/ui/skeleton/Layout';
import LoginForm from '../../components/auth/LoginForm/LoginForm';
import { Container } from 'react-bootstrap';
import { Text } from '../../components/common/Text/Text';
import { Flex } from '../../components/ui/Display/Flex';

import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <Layout>
      <Container className={'bg-transparent px-0 py-3'}>
        <Flex column class={'mb-5'}>
          <Text
            bold
            display={'flex'}
            text={'Se Connecter'}
            size={'1.5rem'}
            paddingBottom={20}
          />
          <Text
            display={'flex'}
            text={"Vous n'avez pas de compte?"}
            size={'1.2rem'}
          />

          <Flex content={'center'} class={'w-100'}>
            <Text text={'Cliquez ici'} size={'1.2rem'} paddingRight={7} />
            <Text text={'pour en créer.'} size={'1.2rem'} />
          </Flex>
        </Flex>
        <LoginForm />

        <Flex class={'pt-3 px-4 px-lg-0'} column items={'center'}>
          <Text text={'Ou se connecter avec'} paddingBottom={25} />
          <Flex items={'center'} content={'space-between'}>
            <Flex
              content={'center'}
              items={'center'}
              class={'border cursor-pointer p-3 rounded-circle mr-5'}
            >
              <FaLinkedinIn color={'#007bba'} size={'1.2rem'} />
            </Flex>
            <Flex
              content={'center'}
              items={'center'}
              class={'border cursor-pointer p-3 rounded-circle mr-5'}
            >
              <FaFacebookF color={'#35579c'} size={'1.2rem'} />
            </Flex>
            <Flex
              content={'center'}
              items={'center'}
              class={'border cursor-pointer p-3 rounded-circle'}
            >
              <FcGoogle size={'1.5rem'} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
