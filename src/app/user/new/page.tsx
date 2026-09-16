import { CreateUserForm } from '@/components/CreateUserForm';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Criar conta',
};

export default async function CreateUserPage() {
  return <CreateUserForm />;
}
