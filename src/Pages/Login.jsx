import AuthShell from '@/Components/auth/AuthShell';
import LoginForm from '@/Components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AuthShell
      title="Your next great story starts here."
      subtitle="Browse curated reads, discover new favorites, and keep your next literary escape close at hand."
      accentText="Book Haven"
    >
      <LoginForm />
    </AuthShell>
  );
}
