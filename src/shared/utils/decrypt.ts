import CryptoJS from 'crypto-js';

const decryptHash = (hash: string): string => {
  return CryptoJS.AES.decrypt(hash, 'secret_key_assesment').toString(CryptoJS.enc.Utf8);
}

export const validatePassword = (password: string, encryptedPassword: string): boolean => password === decryptHash(encryptedPassword) ? true : false;
