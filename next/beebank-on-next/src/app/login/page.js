import PublicNavBar from '../../../generalContent/public/publicNavBar';
import LoginContent from './loginContent';
import Footer from '../../../generalContent/public/footer';

export default function Login() {
  return (
    <div className='ReactContent'>
      <PublicNavBar deactivateButton={true}/>
      <LoginContent />
      <Footer />
    </div>
  );
}
