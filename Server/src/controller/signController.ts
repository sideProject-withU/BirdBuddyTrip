import express from 'express';

export const signUp = async (req: express.Request, res: express.Response) => {
  console.log('!signup');
  res.status(200).send('signup 연결');
};

export const signIn = async (req: express.Request, res: express.Response) => {
  console.log('!signin');
  res.status(200).send('signIn 연결');
};

export const signOut = async (req: express.Request, res: express.Response) => {
  console.log('!signout');
  res.status(200).send('SignOut 연결');
};

export const signGuest = async (
  req: express.Request,
  res: express.Response
) => {
  console.log('!signGuest');
  res.status(200).send('signGuest 연결');
};

export const signex = async (req: express.Request, res: express.Response) => {
  console.log('login?');
  res.status(200).send('Login 연결');
  // try {
  //   const { email, password } = req.body;
  //   const userInfo = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //     include: {
  //       likes: true,
  //       locations: true,
  //     },
  //   });
  //   if (userInfo) {
  //     const user = await bcrypt.compare(password, userInfo.password);
  //     if (user) {
  //       const token = jwt.sign(
  //         {
  //           id: userInfo.id,
  //           email: userInfo.email,
  //           nickname: userInfo.nickname,
  //         },
  //         process.env.ACCESS_SECRET,
  //         {
  //           expiresIn: "24h",
  //         }
  //       );
  //       delete userInfo.password;
  //       return res.status(200).json({ message: "로그인 완료", state: true, userInfo, token });
  //     } else {
  //       return res.status(400).json({ message: "비밀번호가 일치하지 않습니다.", state: false });
  //     }
  //   } else {
  //     return res.status(403).json({ message: "존재하지않는 회원입니다.", state: false });
  //   }
  // } catch (err) {
  //   return res.status(500).json({ message: "마이그레이션 또는 서버 오류입니다.", err });
  // }
};
