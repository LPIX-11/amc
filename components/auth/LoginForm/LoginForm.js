import { Form, FormGroup } from 'react-bootstrap';
import { Flex } from '../../ui/Display/Flex';

import Input from '../../common/input/Input';
import Checkbox from '../../common/checkbox/Checkbox';

import { Text } from '../../common/text/Text';

const LoginForm = () => {
  return (
    <Flex content={'center'} class={'w-100'}>
      <Form className={'px-3 px-lg-5 w-95 w-lg-50'}>
        <FormGroup className={'pb-2'}>
          <Input label={'Identifiant'} />
        </FormGroup>

        <FormGroup className={'pb-2'}>
          <Input label={'Mode de passe'} type={'password'} />
        </FormGroup>

        <Flex items={'center'} content={'space-between'} class={'pb-4 w-100'}>
          <Checkbox
            id={'remember_me'}
            text={'Se souvenir de moi.'}
            onCheck={() => {}}
          />
          <Text
            text={'Mot de passe oublié?'}
            size={'.9em'}
            textClass={'cursor-pointer'}
          />
        </Flex>

        <FormGroup>
          <input
            className={'btn btn-primary w-100 py-2 rounded-0 shadow-on-hover'}
            type={'submit'}
            value={'Se connecter'}
          />
        </FormGroup>
      </Form>
    </Flex>
  );
};

export default LoginForm;
