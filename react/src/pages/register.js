import PublicNavBar from '../components/publicNavBar';
import RegisterContent from '../components/register-content';


export default function Register() {
  return (
    <div className='ReactContent'>
      <PublicNavBar deactivateButton={true}/>
      <RegisterContent />
    </div>
  );
}
