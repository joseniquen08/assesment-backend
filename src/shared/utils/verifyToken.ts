import jwt from 'jsonwebtoken';

export const verifyToken = (token: string): boolean => {
  const realToken = token.split(' ')[1];
  let result = true;
  jwt.verify(realToken, 'token_secret_assesment', function (err, decoded) {
    if (err?.message === 'jwt expired') {
      result = false;
    }
  });
  return result;
}
