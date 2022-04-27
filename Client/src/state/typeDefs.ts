export type showModalProp = {
  show: boolean;
};

export type FormData = {
  nickname?: string;
  email: string;
  password: string;
  password2?: string;
};

export type ErrorProps = {
  error: string | undefined;
};

export interface registerState {
  loginstate: boolean;
  signupClick: boolean;
}

export interface modalState {
  value: boolean;
}
