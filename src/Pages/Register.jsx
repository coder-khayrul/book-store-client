import AuthShell from '@/Components/auth/AuthShell';
import RegisterForm from '@/Components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthShell
      title="Your next great story starts here."
      subtitle="Create your account to save favorites, track orders, and explore books selected for every kind of reader."
      accentText="Book Haven"
    >
      <RegisterForm />
    </AuthShell>
  );
}
