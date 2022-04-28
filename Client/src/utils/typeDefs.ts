export type showModalProp = {
  show: boolean;
};

export type FormData = {
  email: string;
  password: string;
  password2?: string;
  nickname?: string;
  gender?: string;
  birth?: string;
};

export type InputProps = {
  error?: string | undefined;
};

export interface registerState {
  loginstate: boolean;
  signupClick: boolean;
}

export interface modalState {
  value: boolean;
}
