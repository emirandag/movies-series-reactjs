import './LoginForm.css'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthProvider';
import ButtonStyle from '../UI/ButtonStyle/ButtonStyle';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const LoginForm = () => {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => login(data);

  //console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input {...register('user', { required: true })} placeholder='Usuario'/>
      {errors.user && <span>* Este campo es requerido</span>}
      <input type='password' {...register('pass', { required: true })} placeholder='Contraseña' />
      {errors.pass && <span>* Este campo es requerido</span>}
      {/* <input type="submit" /> */}
      <ButtonStyle variant='primary' theme={theme} type="submit">Enviar</ButtonStyle>
    </form>
  );
};

export default LoginForm;