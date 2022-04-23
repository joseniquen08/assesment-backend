import CryptoJS from 'crypto-js';

export const encryptText = (text: string): string => {
  return CryptoJS.AES.encrypt(text, 'secret_key_assesment').toString();
}
