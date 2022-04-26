import express from 'express';

export const getPost = async (req: express.Request, res: express.Response) => {
  console.log('!getPost');
  res.status(200).send('signup 연결');
};

export const getDetailPost = async (
  req: express.Request,
  res: express.Response
) => {
  console.log('!getDetailPost');
  res.status(200).send(' 연결');
};

export const postPost = async (req: express.Request, res: express.Response) => {
  console.log('!postPost');
  res.status(200).send(' 연결');
};

export const putPost = async (req: express.Request, res: express.Response) => {
  console.log('!putPost');
  res.status(200).send(' 연결');
};

export const deletePost = async (
  req: express.Request,
  res: express.Response
) => {
  console.log('!deletePost');
  res.status(200).send(' 연결');
};
