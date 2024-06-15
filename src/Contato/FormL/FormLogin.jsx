import React, { useState } from 'react';
import {Form,Label,Input,TextA,Button} from './form'
function FormContato() {
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const Mudar = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };

  const Evio = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xzbnnkbd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Form onSubmit={Evio}>
      <h2>Entre em contato conosco </h2>
      <Label>
        Nome:
        <Input type="text" name="name" value={FormData.name} onChange={Mudar} />
      </Label>
      <Label>
        Email:
        <Input type="email" name="email" value={FormData.email} onChange={Mudar} />
      </Label>
      <Label>
        Mensagem:
        <TextA name="message" value={FormData.message} onChange={Mudar}></TextA>
      </Label>
      <Button type="submit">ENVIAR</Button>
    </Form>
  );
}
export default FormContato
