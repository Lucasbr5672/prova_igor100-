import React, { useState } from 'react';
import {Form,Input, Button,Img} from './form'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
      emailError = 'Email inválido';
    }

    if (!validatePassword(password)) {
      passwordError = 'A senha deve ter pelo menos 6 caracteres';
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
        <br />
        <Img src="./icon.jpg" height="70px" width="70px"/>
       
      <div>
        <br />
       <p>Digite seu email...</p>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <br />
      <div>
        <p>Digite sua senha...</p>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <br />
      <Button type="submit">ENTRAR</Button>
    </Form>
  );
};

export default LoginForm;