import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../context/AuthProvider';

const Login = () => {
  const { user } = useAuth();

  return <>{!user ? <LoginForm /> : <Navigate to="/movies" />}</>;
};

export default Login;