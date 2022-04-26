import express from 'express';

export const getUser = async (req: express.Request, res: express.Response) => {
  console.log('!getUser');
  res.status(200).send('getUser 연결');
};

export const putUser = async (req: express.Request, res: express.Response) => {
  console.log('!putUser');
  res.status(200).send('  연결');
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  console.log('!deleteUser');
  res.status(200).send('  연결');
};
