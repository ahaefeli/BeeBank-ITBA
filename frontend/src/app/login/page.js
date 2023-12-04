'use client';

import { ContextProvider } from '../AppContext';

import PublicNavBar from '../../../generalContent/public/publicNavBar';
import Footer from '../../../generalContent/public/footer';
import LoginContent from './loginContent'

export default function LoginPage() {

  return (
    <>
      <ContextProvider>
        <div>
          <PublicNavBar />
          <LoginContent />
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
}
