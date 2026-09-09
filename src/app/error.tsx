'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Erro inesperado. Tente novamente mais tarde.'
    />
  );
}
