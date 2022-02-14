import React from 'react';
import { useLogin } from '../Login/useLogin';

export const Login = () => {
  const { submit, form, updateInput } = useLogin();

  return (
    <div>
      <input
        type="email"
        value={form.email}
        onChange={(e) => updateInput('email', e.currentTarget.value)}
      />
      <input
        type="password"
        value={form.password}
        onChange={(e) => updateInput('password', e.currentTarget.value)}
      />
      <button onClick={submit}>Login</button>
    </div>
  );
};
