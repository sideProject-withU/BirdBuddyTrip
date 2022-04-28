import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../../utils/typeDefs';
import { useAppDispatch } from '../../state/store/hook';
import { moveToSignupPage } from '../../state/store/register';

import {
  Form,
  Input,
  SignInTitle,
  Button,
  SignUpLink,
  ErrorMessage,
  SocalLoginWrap,
  ColumnoWrap,
  SocialIcon,
  SocialButton,
  SignUpButton,
  SignUpWrap,
  SignUpLead,
} from '../../styled/modal';
import { emailPattern, passwordPattern } from '../../utils/validation/validation';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [invalid, setInvalid] = useState<boolean>(true);
  const [infoCheck, setInfoCheck] = useState<string>('');

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SignInTitle>로그인</SignInTitle>
      <Input
        type="text"
        placeholder="Email"
        error={errors.email?.message}
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: emailPattern,
        })}
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Input
        type="text"
        placeholder="Password"
        error={errors.password?.message}
        {...register('password', {
          required: '비밀번호를 입력해주세요',
          pattern: passwordPattern,
        })}
      />
      {invalid ? <ErrorMessage>{errors.password?.message}</ErrorMessage> : <ErrorMessage>{infoCheck}</ErrorMessage>}
      <Button>LOGIN</Button>
      <SignUpWrap>
        <SignUpLead>아이디가 없으신가요?</SignUpLead>
        <SignUpButton
          onClick={() => {
            dispatch(moveToSignupPage(true));
          }}
        >
          회원가입
        </SignUpButton>
      </SignUpWrap>
      <SocalLoginWrap>
        <ColumnoWrap>
          <SocialIcon src="images/kakao.png" />
          <SocialButton>카카오로 로그인 </SocialButton>
        </ColumnoWrap>
        <ColumnoWrap>
          <SocialIcon src="images/book.png" />
          <SocialButton>게스트로 로그인 </SocialButton>
        </ColumnoWrap>
      </SocalLoginWrap>
    </Form>
  );
};
export default SignIn;
