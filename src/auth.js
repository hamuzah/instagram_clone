// src/api/auth.js
const API_KEY = "AIzaSyBlVNmsteVUuzWByr78bXBIcUvNA-GX7KI";

export const signup = async (email, password) => {
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Failed to sign up');
  }

  return data;
};

export const login = async (email, password) => {
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || 'Failed to log in');
  }

  return data;
};
