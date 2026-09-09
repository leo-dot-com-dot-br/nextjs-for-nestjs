import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const myPass = '';
  const hashOfMyPassToBase64 = await hashPassword(myPass);

  console.log({ hashOfMyPassToBase64 });
})();
