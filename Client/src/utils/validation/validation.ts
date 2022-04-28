export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: '이메일 형식으로 입력해주세요',
};

export const passwordPattern = {
  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  message: '8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요',
};

export const nickPattern = {
  value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
  message: '숫자, 영어, 한글만 입력해주세요',
};
