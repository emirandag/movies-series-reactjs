import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../context/AuthProvider';
import { useEffect, useState } from 'react';

const Login = () => {

  const [data, setData] = useState({})
  

  const { user, login } = useAuth();

  useEffect(() => {
    setData(() => login({user: "guest"}))

   
  }, [!user])

  return <>{!user ? <LoginForm />: <Navigate to="/profile" />}</>;
};

export default Login;