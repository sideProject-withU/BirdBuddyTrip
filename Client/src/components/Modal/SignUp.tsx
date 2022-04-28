import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../../utils/typeDefs';
import { Button, ErrorMessage, Form, Input, NarrowInput, Selection, SendButton, Title } from '../../styled/modal';
import { birthPattern, emailPattern, nickPattern, passwordPattern } from '../../utils/validation/validation';

const SignUp = () => {
  const [nickCheck, setNickCheck] = useState('');
  const [nickValid, setNickValid] = useState(false);
  const [choice, setChoice] = useState<string>('');

  const lists = ['성별', '여자', '남자', '기타'];

  const options = lists.map((list, i) => {
    return (
      <option key={i} value={lists[i]}>
        {list}
      </option>
    );
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>회원가입</Title>
      <Input
        type="text"
        placeholder="이메일"
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: emailPattern,
        })}
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Input
        type="text"
        placeholder="닉네임"
        {...register('nickname', {
          required: '닉네임을 입력해주세요',
          pattern: nickPattern,
          minLength: { value: 2, message: '최소 2자 이상 입력해주세요' },
          maxLength: { value: 8, message: '최대 8자 이하로 입력해주세요' },
          onChange: () => {
            setNickValid(false);
            setNickCheck('');
          },
          shouldUnregister: true,
        })}
      />
      <SendButton type="button">발송</SendButton>
      <ErrorMessage>{errors.nickname?.message}</ErrorMessage>

      <Input
        type="password"
        placeholder="비밀번호"
        {...register('password', {
          required: '비밀번호를 입력해주세요',
          pattern: passwordPattern,
        })}
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>
      <Input
        type="password"
        placeholder="비밀번호확인"
        {...register('password2', {
          required: '비밀번호를 입력해주세요',
          validate: {
            matchPassword: (value) => {
              const { password } = getValues();
              return password === value || '비밀번호가 일치하지 않습니다.';
            },
          },
        })}
      />
      <ErrorMessage>{errors.password2?.message}</ErrorMessage>
      <Input
        type="text"
        placeholder="생년월일(6자리)"
        {...register('birth', {
          required: '생년월일을 입력해주세요',
          pattern: birthPattern,
        })}
      />
      <ErrorMessage>{errors.birth?.message}</ErrorMessage>
      <Selection
        onInput={(event: React.FormEvent<HTMLSelectElement>) => setChoice((event.target as HTMLInputElement).value)}
      >
        {options}
      </Selection>
      <Button type="submit">NEXT</Button>
    </Form>
  );
};

export default SignUp;
