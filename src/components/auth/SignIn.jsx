import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" name="Email" ref={register} />
      <input type="password" placeholder="Password" name="Password" ref={register} />

      <input type="submit" />
    </form>
  );
}
