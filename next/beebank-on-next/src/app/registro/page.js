import PublicNavBar from '../../../generalContent/public/publicNavBar';
import RegisterContent from './registerContent';
import Footer from '../../../generalContent/public/footer';

export default function Register() {
  return (
    <div className='ReactContent'>
      <PublicNavBar deactivateButton={true}/>
      <RegisterContent />
      <Footer />
    </div>
  );
}
