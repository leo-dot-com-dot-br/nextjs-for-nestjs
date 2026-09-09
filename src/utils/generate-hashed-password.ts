import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const myPass = '123456';
  const hashOfMyPassToBase64 = await hashPassword(myPass);

  console.log({ hashOfMyPassToBase64 });
})();
